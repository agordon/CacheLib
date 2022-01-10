#!/bin/sh


DEBUG=
MULTICORE=y
VERBOSE=y

PKGS="zstd
googlelog
googleflags
googletest
fmt
sparsemap
folly
fizz
wangle"


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

rm -r ./opt/cachelib

for p in $PKGS ; do
  ./contrib/build-package.sh -i $FLAGS $p || die "failed to build '$p'"
done

## Fizz requires post-patching:
## It's ".cmake" file requires non-existing library definition - remove it.
## (for some reason, "ZLIB" is detected differently on macos with the native zlib directory)
find opt -iname 'fizz*.cmake' \
   | xargs grep -l ZLIB::ZLIB \
   | xargs sed -i.BAK -e '/INTERFACE_LINK_LIBRARIES/s/ZLIB::ZLIB;//'

## FBThrift Requires CMAKE-related patching on MacOS

## NOTE: If the patch is already applied, the exit code will be 1,
## so we don't check the exit code.
( cd cachelib/external/fbthrift ;
  patch --batch --forward -p1 \
     < ../../../contrib/macos-fbthrift.patch ) \

# Note the "-S" flag: means DO NOT update from git - as we just patched it.
./contrib/build-package.sh -S -i $FLAGS fbthrift || die "failed to build 'fbthrift'"

