{
}@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "git://git.devalot.com/edify.git";
    rev = "95f51d410056cbf7f241c596a1263d7cfeefe942";
  };

  edify = import "${repo}/nix/builder.nix" args;
  pkgs  = edify.pkgs;

  nodeHelper = import ./nix/node {pkgs = edify.pkgs;};
in

edify.mkDerivation rec {
  name = "webdev-${version}";
  version = "0.13";
  src = builtins.fetchGit ./.;

  # Extra files to include in the zip archive:
  extraFiles = [ "LICENSE" "README.md" "start-scripts" "src" ];

  # Additional system dependencies:
  buildInputs = nodeHelper.buildInputs;

  # Install things:
  installPhase = nodeHelper.installPhase;
}
