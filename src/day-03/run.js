// Dependencies

const displayOutput = require('../helpers/display-output');
const fs = require('../helpers/fs-extravaganza');
const getInputFile = require('../helpers/get-input-file');

const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Public

function main() {
  const input = fs.readArraySync(getInputFile(3));

  const result1 = part1(input);
  const result2 = part2(input);

  displayOutput(result1, result2);
}

main();
