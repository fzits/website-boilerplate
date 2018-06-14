#!/bin/bash

source ./.env

npx browser-sync start --proxy "localhost:${WEB_PORT}" --files "./web/html/css/**/*.css"
