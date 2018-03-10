let
  # All dependencies come from this package source:
  pinned = {
    owner  = "NixOS";
    repo   = "nixpkgs-channels";

    # NixOS 17.09 (stable) as of 1/30/2018:
    rev    = "c2b668ee7264000b10d554754150ea9305b6ef3d";
    sha256 = "1nqjsl163dahghidh06k3ynzq6kkmb9pzj1njw6ilfx7axygkyx8";
  };

  # Which version of Edify to use:
  edifyRepo = {
    url    = "git://git.devalot.com/edify.git";
    rev    = "053d5b74ebca25e572be6726bda538071c348c8c";
    sha256 = "1biv8gqgmyiap38xxvzb2vwchagg82h45i73df66w69dmrg78q4d";
  };

  # Load the host's nixpkgs, then the pinned version:
  hostPkgs   = import <nixpkgs> {};
  pinnedPkgs = import (hostPkgs.fetchFromGitHub pinned) {};

  # Fetch edify from another repository:
  edifyDrv = import "${pinnedPkgs.fetchgit edifyRepo}/edify.nix";
  edifyPkg = pinnedPkgs.haskellPackages.callPackage edifyDrv {};

  # Files which describe needed NPM modules:
  nodeNixFiles = [
    ./nix/node/webdev
  ];

  # A function that that turns the files above into packages.
  nodePkgs = map (f: (import f {pkgs = pinnedPkgs;}).shell) nodeNixFiles;
in
{ pkgs ? pinnedPkgs
}:

pkgs.stdenv.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.1.1";
  src = builtins.fetchGit ./.;

  # Specifically don't want fixups for this package:
  phases = [ "unpackPhase" "buildPhase" "installPhase" ];

  # Additional system dependencies:
  buildInputs = with pkgs; [
    inkscape # For SVG -> PDF
    graphviz_2_32 # For DOT -> PDF

    # Markdown -> PDF:
    edifyPkg
    pandoc
    haskellPackages.pandoc-citeproc
    haskellPackages.pandoc-crossref

    # TeX:
    (texlive.combine {
      inherit (texlive) scheme-small collection-binextra beamer;
    })

    # Node.js:
    nodejs-8_x

    # For packaging:
    zip
  ];

  buildPhase = ''
    edify build --top "$(pwd)" courses/*.md
  '';

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
  ''
  + pkgs.lib.concatMapStrings (p: ''
    # Copy NPM packages into place:
    cp -rp ${p.nodeDependencies}/lib/node_modules $dest/src/
  '' ) nodePkgs
  + ''
    # Run some files through Babel:
    ( cd $dest/src
      mkdir babel/es5
      node node_modules/.bin/babel --presets env -d babel/es5 babel/es6
    )

    # Build archives:
    ( cd $out && zip -9 -y -r -q ${name}.zip ${name} )
  '';
}
