#! /usr/bin/env nix-shell
#! nix-shell -i bash -p bash nodePackages.node2nix
# shellcheck shell=bash

################################################################################
# This script uses `node2nix` to generate stable JavaScript dependencies.
set -e
set -u

################################################################################
top=$(realpath "$(dirname "$0")/../..")
node_dir=$(realpath "$(dirname "$0")")

################################################################################
update() {
  package_dir=$1
  local_name=$2
  nix_dir="$node_dir/$local_name"

  rm -rf "$nix_dir"
  mkdir -p "$nix_dir"
  cp "$package_dir"/package.json "$package_dir"/package-lock.json "$nix_dir"

  ( cd "$nix_dir"
    node2nix -8 -l package-lock.json
  )
}

################################################################################

# No longer building these:
# update "$top/src" "webdev"
# update "$top/src/www/js/alternatives/typescript" "typescript"
# update "$top/src/www/js/tools/webpack" "webpack"
# update "$top/src/www/js/frameworks/vue" "vue"
# update "$top/src/www/js/frameworks/angular2" "angular2"

# Local Variables:
#   mode: sh
#   sh-shell: bash
# End:
