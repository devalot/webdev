#!/bin/sh

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
  mkdir -p "$nix_dir"
  cp "$package_dir"/package.json "$package_dir"/package-lock.json "$nix_dir"

  ( cd "$nix_dir"
    nix-shell --run runNode2Nix "$top/default.nix"
  )
}

################################################################################
update "$top/src"                       "webdev"
update "$top/src/www/js/tools/webpack"  "webpack"
update "$top/src/www/js/frameworks/vue" "vue"

# FIXME: Missing the package lock file.
# update "$top/src/www/js/frameworks/angular2" "angular2"
