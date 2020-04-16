{
}@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "https://github.com/pjones/edify.git";
    rev = "86fda3a27b96acbe866f2558f66ea4e92fb59e76";
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

  # Extra files to include in the zip archive:
  extraFiles = [ "LICENSE" "README.md" "start-scripts" "src" ];

  # Additional system dependencies:
  buildInputs = nodeHelper.buildInputs;

  # Install things:
  installPhase = nodeHelper.installPhase;
}
