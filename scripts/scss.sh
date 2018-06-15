#!/bin/bash

source ./.env

IS_PRODUCTION=false
OPT_WATCH=""
OPT_SOURCE_MAP="--source-map ${SCSS_DEST}"
OPT_QUIET=""

# @ref https://qiita.com/b4b4r07/items/dcd6be0bb9c9185475bb
declare -i argc=0
declare -a argv=()

while (( $# > 0 ))
do
    case "$1" in
        -*)
            if [[ "$1" =~ 'w' ]]; then
                OPT_WATCH="--watch"
            fi
            if [[ "$1" =~ 'p' ]]; then
                IS_PRODUCTION=true
            fi
            shift
            ;;
        *)
            ((++argc))
            argv=("${argv[@]}" "$1")
            shift
            ;;
    esac
done

if $IS_PRODUCTION; then
    rm -rf ${SCSS_DEST}/*
    OPT_SOURCE_MAP=""
    OPT_QUIET="--quiet"
fi

npx node-sass $SCSS_SRC -o $SCSS_DEST $OPT_WATCH $OPT_QUIET $OPT_SOURCE_MAP
