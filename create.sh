#!/usr/bin/env bash

# Stop at first error

set -e

# Private

NUM_ARGS=$#
THIS_FOLDER="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
TEMPLATE_FOLDER="${THIS_FOLDER}/src/helpers/template"
TARGET_FOLDER=$1

## Color Variables ##

RED='\033[00;31m'
BOLD='\033[00;1m'
BOLD_RED='\033[00;1;31m'
RESET='\033[00;0m'

# Functions

display_usage (){
    echo -e "\n${BOLD}Usage:${RESET} $0 [dayNumber] \n"
}

# Check to see if arguments weren't given
if [[ $# -eq 0 ]]; then
    echo -e "${BOLD_RED}ERROR: ${RED}Missing day number${RESET}"
    display_usage
    exit 1
fi

# Get the 2-digit day
DAY=$(printf %02d $1)

mkdir -p "src/day-${DAY}"
cp -v ${TEMPLATE_FOLDER}/* src/day-${DAY}