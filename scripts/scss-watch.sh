#!/bin/bash

source ./.env

chokidar ${SCSS_SRC}** -c './scripts/scss-build.sh'
