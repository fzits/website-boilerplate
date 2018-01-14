#!/bin/bash

source ./scripts/scss.env

chokidar ${SCSS_SRC}** -c './scripts/scss-build.sh'
