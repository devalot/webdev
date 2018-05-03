{ pkgs }:

with pkgs.lib;

let

  ##############################################################################
  # Version of NodeJS used for bundling JS packages:
  nodejs = pkgs.nodejs-8_x;

  ##############################################################################
  # Files which describe needed NPM modules.  Use the
  # `nix/node/update.sh' script to generate these files.
  nodeNixFiles = [
    { load = ./webdev;  for = "src";                      }
    { load = ./webpack; for = "src/www/js/tools/webpack"; }
  ];

  ##############################################################################
  # A function that that turns the files above into packages.
  mkNodePkgs = file: (import file { inherit pkgs nodejs; }).shell;

  ##############################################################################
  # How to install node_modules for a project in webdev:
  installModules = def:
    "cp -rp ${(mkNodePkgs def.load).nodeDependencies}/lib/node_modules $dest/${def.for}";

  ##############################################################################
  buildInputs = [
    nodejs
    pkgs.nodePackages.node2nix
  ];

  ##############################################################################
  installPhase = ''
    # Install all needed node_modules.
    ${concatMapStrings installModules nodeNixFiles}

    # Run some files through Babel:
    ( cd $dest/src
      mkdir -p babel/es5
      node node_modules/.bin/babel --presets env -d babel/es5 babel/es6
    )
  '';

  ##############################################################################
  shellHook = ''
    # Helper function to call node2nix correctly.
    runNode2Nix() {
      node2nix -8 -l package-lock.json --development
    }
  '';

in { inherit buildInputs installPhase shellHook; }
