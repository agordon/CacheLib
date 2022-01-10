#!/bin/sh

DEBUG=y
MULTICORE=y
VERBOSE=y
TESTS=y

die()
{
  base=$(basename "$0")
  echo "$base: error: $*" >&2
  exit 1
}

FLAGS=
test -n "$DEBUG" && FLAGS="$FLAGS -d"
test -n "$MULTICORE" && FLAGS="$FLAGS -j"
test -n "$VERBOSE" && FLAGS="$FLAGS -v"
test -n "$TESTS" && FLAGS="$FLAGS -t"

./contrib/build-package.sh $FLAGS -i cachelib || die "failed to build 'cachelib'"
