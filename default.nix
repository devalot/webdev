{ }@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "https://github.com/pjones/edify.git";
    rev = "ea2868f53e14553c027def99161606d511b382c0";
  };

  edify = import "${repo}/nix/builder.nix" args;
  pkgs = edify.pkgs;

  nodeHelper = import ./nix/node { pkgs = edify.pkgs; };

in edify.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.13";
  src = builtins.fetchGit ./.;

  # Extra markdown extensions:
  extensions = [ "emoji" "implicit_figures" ];

  # Extra flags to pass to Pandoc:
  pandocFlags = [ "pdf-engine=xelatex" "variable=theme:Boadilla" ];

  # Extra files to include in the zip archive:
  extraFiles = [ "LICENSE" "README.md" "start-scripts" "src" ];

  # Additional system dependencies:
  buildInputs = nodeHelper.buildInputs;

  # Install things:
  installPhase = nodeHelper.installPhase;
}
