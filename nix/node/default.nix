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
    { load = ./webdev;  for = "src";                       }
    { load = ./webpack; for = "src/www/js/tools/webpack";  }
  ];

  ##############################################################################
  # A function that that turns the files above into packages.
  mkNodePkgs = file: (import file { inherit pkgs nodejs; }).shell;

  ##############################################################################
  # How to install node_modules for a project in webdev:
  installModules = def: ''
    cp -rp ${(mkNodePkgs def.load).nodeDependencies}/lib/node_modules \
      "$dest/${def.for}"
    chmod -R u+w "$dest/${def.for}"
  '';

  ##############################################################################
  buildInputs = [
    nodejs
  ];

  ##############################################################################
  installPhase = ''
    # Keep NPM from trying to use the network:
    export NO_UPDATE_NOTIFIER=1

    # Install all needed node_modules.
    ${concatMapStrings installModules nodeNixFiles}

    # Run some files through Babel:
    ( cd $dest/src
      node node_modules/.bin/babel -d babel/es2015-es5 babel/es2015

      # Broken:
      # node node_modules/.bin/babel -d babel/es2018-es5 babel/es2018
    )

    # Prepare the Webpack demo app:
    ( cd "$dest/src/www/js/tools/webpack"
      npm run build
    )

    # Prepare the Vue.js demo app:
    ( cd "$dest/src/www/js/frameworks/vue"
      npm run build
    )
  '';

in { inherit buildInputs installPhase shellHook; }
