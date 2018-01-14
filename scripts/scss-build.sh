#!/bin/bash

source ./scripts/scss.env

OPT_SOURCE_MAP="--source-map ${SCSS_DEST}"
OPT_QUIET="--quiet"

if ! [ -z "$NODE_ENV" ] && [ $NODE_ENV = "production" ]; then
    OPT_SOURCE_MAP=""
    OPT_QUIET=""
fi

npx node-sass $SCSS_SRC -o $SCSS_DEST $OPT_QUIET $OPT_SOURCE_MAP
