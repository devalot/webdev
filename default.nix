let sources = import nix/sources.nix;
in
{ pkgs ? import sources.nixpkgs { }
}:
let
  inherit (pkgs) lib stdenvNoCC;

  edify = import sources.edify { inherit pkgs; };
  nodeHelper = import ./nix/node { inherit pkgs; };

in
stdenvNoCC.mkDerivation {
  pname = "webdev";
  version = "0.13";

  src =
    lib.cleanSourceWith {
      src = lib.cleanSource ./.;
      filter = path: type:
        !(type == "directory" && baseNameOf path == "build");
    };

  buildInputs =
    [ edify.bin pkgs.zip ]
    ++ nodeHelper.buildInputs;

  buildPhase = ''
    # It's safe to run shell commands in the Nix sandbox.
    edify build --unsafe-allow-commands
  '';

  installPhase = ''
    mkdir -p "$out/$name/handouts" "$out/$name/slides"
    cp -a LICENSE README.md start-scripts src "$out/$name"

    # Copy PDF files into the correct locations:
    find build -type f -name '*.handout.pdf' -exec mv '{}' "$out/$name/handouts" ';'
    find build -type f -name '*.slides.pdf'  -exec mv '{}' "$out/$name/slides" ';'

    # Rename PDF files:
    for file in $out/$name/{handouts,slides}/*.pdf; do
      mv "$file" "$(sed -E 's/[.](handout|slides)[.]pdf/.pdf/' <<<"$file")"
    done

    # Install other files:
    ${nodeHelper.installPhase}

    # Build archives:
    ( cd "$out" && zip -9 -y -r -q "$name.zip" "$name" )
  '';
}
