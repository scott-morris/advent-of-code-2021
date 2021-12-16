// Dependencies

const chalk = require('chalk');
const displayOutput = require('../helpers/display-output');
const fs = require('../helpers/fs-extravaganza');
const getInputFile = require('../helpers/get-input-file');
const timeExecution = require('../helpers/time-execution');

const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');
const parseInput = require('./parse-input');

// Public

function main() {
  const raw = fs.readArraySync(getInputFile(13));
  const input = parseInput(raw);

  const result1 = timeExecution(part1)(input);
  const result2 = timeExecution(part2)(input);

  displayOutput(result1, { duration: result2.duration });

  console.log();
  console.log(chalk.bold.underline.blue('Result #2:'));
  console.log();
  console.log(result2.result);
}

main();
