{
}@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "git://git.devalot.com/edify.git";
    rev = "5faef56f9d28dd8c1233d37edd7cd72af1fc03a2";
  };

  edify = import "${repo}/nix/builder.nix" args;
  pkgs  = edify.pkgs;

  nodeHelper = import ./nix/node {pkgs = edify.pkgs;};
in

edify.mkDerivation rec {
  name = "webdev-${version}";
  version = "1.0";
  src = builtins.fetchGit ./.;

  # Extra files to include in the zip archive:
  extraFiles = [ "LICENSE" "README.md" "start-scripts" "src" ];

  # Additional system dependencies:
  buildInputs = nodeHelper.buildInputs;

  # Install things:
  installPhase = nodeHelper.installPhase;

  # Shell helpers:
  shellHook = nodeHelper.shellHook;
}
