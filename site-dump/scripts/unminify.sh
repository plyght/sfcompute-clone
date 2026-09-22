#!/bin/bash
# Keeps the ORIGINAL as <name>.min.<ext> and writes the formatted version in place.
# Extractors must read the .min copies — they match minified text.
set -u
cd "$(dirname "$0")/.."
shopt -s globstar nullglob
for f in pages/**/*.html assets/**/*.css assets/**/*.js; do
  case "$f" in *.min.*) continue;; esac
  ext="${f##*.}"; base="${f%.*}"; min="$base.min.$ext"
  [ -f "$min" ] || cp "$f" "$min"
  case "$ext" in
    html) parser=html;; css) parser=css;; js) parser=babel;;
  esac
  if prettier --parser "$parser" --print-width 120 "$min" > "$f.tmp" 2>/dev/null; then
    mv "$f.tmp" "$f"; echo "ok   $f"
  else
    rm -f "$f.tmp"; cp "$min" "$f"; echo "SKIP $f"
  fi
done
