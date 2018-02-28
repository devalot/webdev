#!/usr/bin/env bash

set -e

if ! type node > /dev/null 2>&1; then
  osascript -e 'tell app "System Events" to display dialog "Please install Node.js first."'
fi

cd "$(dirname "$0")/../src"

if [ ! -d node_modules ]; then
  npm install
fi

node bin/server.js
