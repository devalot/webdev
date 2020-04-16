{
}@args:

let
  # Some helper files:
  repo = fetchGit {
    url = "https://github.com/pjones/edify.git";
    rev = "ac85b7c4682077cc5bc5cd1691c60e94305b8f39";
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
