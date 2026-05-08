#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUNDLER_BIN="$HOME/.gem/ruby/2.6.0/bin/bundle"

if [ ! -x "$BUNDLER_BIN" ]; then
  echo "Bundler 2.4.22 not found at $BUNDLER_BIN"
  echo "Install with: gem install --user-install bundler:2.4.22"
  exit 1
fi

cd "$ROOT_DIR"

if [ ! -d "vendor/bundle" ]; then
  "$BUNDLER_BIN" _2.4.22_ config set path vendor/bundle
  "$BUNDLER_BIN" _2.4.22_ install
fi

JEKYLL_NO_BUNDLER_REQUIRE=true \
  "$BUNDLER_BIN" _2.4.22_ exec jekyll serve \
  --livereload \
  --host 127.0.0.1 \
  --port 4000
