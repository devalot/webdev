#! /usr/bin/env nix-shell
#! nix-shell -i bash -p inotify-tools
# shellcheck shell=bash

while inotifywait -e modify -r content courses diagrams src @src/node_modules; do
  nix-shell --run 'eval "$buildPhase"'
done


# Local Variables:
#   mode: sh
#   sh-shell: bash
# End:
