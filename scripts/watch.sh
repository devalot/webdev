#! /usr/bin/env nix-shell
#! nix-shell -i bash -p inotify-tools
# shellcheck shell=bash

do_build() {
  echo "=> Building"
  nix-shell --run 'eval "$buildPhase"'
}

do_build

while inotifywait -e modify -r content courses diagrams src @src/node_modules; do
  do_build
done

# Local Variables:
#   mode: sh
#   sh-shell: bash
# End:
