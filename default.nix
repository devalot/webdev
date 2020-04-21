{
}@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "https://github.com/pjones/edify.git";
    rev = "c73e108b05672e8b753dfdd0ae474e36f0c61d95";
  };

  edify = import "${repo}/nix/builder.nix" args;
  pkgs  = edify.pkgs;

  nodeHelper = import ./nix/node {pkgs = edify.pkgs;};
in

edify.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.13";
  src = builtins.fetchGit ./.;

  # Extra markdown extensions:
  extensions = [ "emoji" "implicit_figures" ];

  # Extra flags to pass to Pandoc:
  pandocFlags = [ "pdf-engine=xelatex" ];

  # Extra files to include in the zip archive:
  extraFiles = [ "LICENSE" "README.md" "start-scripts" "src" ];

  # Additional system dependencies:
  buildInputs = nodeHelper.buildInputs;

  # Install things:
  installPhase = nodeHelper.installPhase;
}
