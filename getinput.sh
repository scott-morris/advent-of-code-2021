#!/usr/bin/env bash

# Stop at first error

set -e

## Color Variables ##

RED='\033[00;31m'
BOLD='\033[00;1m'
BOLD_RED='\033[00;1;31m'
RESET='\033[00;0m'

# Check to see if arguments weren't given
if [[ $# -eq 0 ]]; then
    echo -e "${BOLD_RED}ERROR: ${RED}Missing day number${RESET}"
    display_usage
    exit 1
fi

# Check to see `session.env` exists
if [[ ! -f ./session.env ]]; then
    echo -e "${BOLD_RED}ERROR: ${RED}Missing session.env${RESET}"
    exit 0
fi

# Get the environment variable
. ./session.env

# Get the 2-digit day
DAY=$(printf %02d $1)
FILE=./data/input-${DAY}.data

if [ -f $FILE ]; then
# Run the `run.js` in the given folder if it can be found
    echo -e "${BOLD}INFO: ${RESET} \"${FILE}\" already exists"
else
    echo ""
    curl https://adventofcode.com/2021/day/$1/input --cookie "session=$SESSION" --output $FILE
    echo ""
fi
