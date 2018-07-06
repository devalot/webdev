let
  # Some helper files:
  pinned     = import ./nix/pinned.nix;
  nodeHelper = import ./nix/node {pkgs = pinned.pkgs;};

in
{ pkgs ? pinned.pkgs
}:

pkgs.stdenv.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.7.0";
  src = builtins.fetchGit ./.;

  # Specifically don't want fixups for this package:
  phases = [ "unpackPhase" "buildPhase" "installPhase" ];

  # Additional system dependencies:
  buildInputs = with pkgs; [
    inkscape      # For SVG  -> PDF
    graphviz_2_32 # For DOT  -> PDF
    sassc         # For SCSS -> CSS (Sass)

    # Markdown -> PDF:
    pinned.edify
    pandoc
    haskellPackages.pandoc-citeproc
    haskellPackages.pandoc-crossref

    # TeX (and PDF):
    (texlive.combine {
      inherit (texlive) scheme-small collection-binextra beamer;
    })

    # For packaging:
    zip
  ] ++ nodeHelper.buildInputs;

  # Build things:
  buildPhase = ''
    edify build --top "$(pwd)" courses/*.md
  '';

  # Install things:
  installPhase = ''
    dest=$out/${name}

    mkdir -p $dest/handouts -p $dest/slides
    cp -rp LICENSE README.md start-scripts src $dest/

    # Copy PDF files into the correct locations:
    find build -type f -name '*.handout.pdf' -exec cp '{}' $dest/handouts ';'
    find build -type f -name '*.slides.pdf'  -exec cp '{}' $dest/slides ';'

    # Rename PDF files:
    for file in $dest/{handouts,slides}/*.pdf; do
      mv $file $(echo $file | sed -E 's/[.](handout|slides)[.]pdf/.pdf/')
    done

    # Build Node.js modules and projects:
    ${nodeHelper.installPhase}

    # Build archives:
    ( cd $out && zip -9 -y -r -q ${name}.zip ${name} )
  '';

  # Shell helpers:
  shellHook = nodeHelper.shellHook;
}
