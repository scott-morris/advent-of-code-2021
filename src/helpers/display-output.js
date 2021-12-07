// Libraries

const chalk = require('chalk');

// Dependencies

const math = require('./math');

// Private

function displayResult(name, { result, duration }) {
  const prefix = chalk.bold.blue(name) + chalk.bold.blue(':');
  const durationMessage = chalk.italic.blue(
    `(took ${math.round(duration, 4)} seconds)`
  );
  console.log(`${prefix} ${chalk.bold.white(result)} ${durationMessage}`);
  // TODO: right align answers when both answers are available
}

// Public

function displayOutput(result1, result2) {
  displayResult('Part 1', result1);

  if (result2 !== undefined) {
    displayResult('Part 2', result2);
  }
}

module.exports = displayOutput;
