#!/usr/bin/env bash

set -e

if ! type node > /dev/null 2>&1; then
  >&2 echo "Please install Node.js first."
  exit 1
fi

cd "$(dirname "$0")/../src"

if [ ! -d node_modules ]; then
  npm install
fi

node bin/server.js
