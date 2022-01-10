#!/bin/sh

PKGS="bison
boost
brotli
bzip2
cmake
curl
double-conversion
dwarf
flex
gdbm
gettext
glib
jemalloc
libelf
libevent
libffi
libidn2
libsodium
libunistring
libunwind-headers
libuv
lz4
ncurses
node
openssl@1.1
pcre
pcre2
protobuf
readline
six
snappy
sqlite
tmux
webp
xz
zstd"

die()
{
  base=$(basename "$0")
  echo "$base: error: $*" >&2
  exit 1
}

for p in $PKGS ; do
  brew install "$p" || die "brew install/upgrade failed for '$p'"
done
