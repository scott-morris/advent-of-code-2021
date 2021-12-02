#!/usr/bin/env bash

# Stop at first error

set -e

# Private

NUM_ARGS=$#
THIS_FOLDER="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
TARGET_FOLDER=$1

## Color Variables ##

RED='\033[00;31m'
BLUE='\033[00;34m'
GREEN='\033[00;32m'

BOLD='\033[00;1m'
BOLD_RED='\033[00;1;31m'
BOLD_BLUE='\033[00;1;34m'
BOLD_GREEN='\033[00;1;32m'

RESET='\033[00;0m'

# Functions

display_usage (){
    echo -e "\n${BOLD}Usage:${RESET} $0 [dayNumber] \n"
}

# Main

if [[ $# -eq 0 ]]; then
    echo -e "${BOLD_RED}ERROR: ${RED}Missing day number${RESET}"
    display_usage
fi

DAY=$(printf %02d $1)

node ./src/day-${DAY}/run.js