#!/usr/bin/env bash

set -e

if ! type node > /dev/null 2>&1; then
  osascript -e 'tell app "System Events" to display dialog "Please install Node.js first."'
  exit 1
fi

. "$(dirname "$0")/linux.sh"
