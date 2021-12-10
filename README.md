# Advent of Code 2021

My attempts at the [Advent of Code](https://adventofcode.com/2021/) challenges for 2021. For more about the individual solutions or thought processes, you can read [my notes](src/readme.md).


## Getting Started

Install NPM dependencies

```
npm i
```

Save your input data as `input-##.data` in the `data/` folder.

## Usage

### Scripts

There's a script to run the `./src/day-##/run.js` file against the corresponding `input-##.data` in the `data/` folder.

```
./run.sh <daynumber>
```

To start a new day, you can also run the `create.sh` script.

```
./create.sh <daynumber>
```

## Tests

The scripts are fully tested. To run tests, run:

```
npm test
```

If you would like to run tests for a single day, you can run the `test.sh` script.

```
./test.sh <daynumber>
```

*Note: if all of the tests pass for this day, it will also run the script.*