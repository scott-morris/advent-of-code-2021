// Libraries

const fs = require('fs-extra');
const path = require('path');

// Dependencies

const part1 = require('./part1.js');
const part2 = require('./part2.js');

// Public

function main() {
  const input = fs
    .readFileSync(path.resolve(__dirname, '../../data/input-01.data'))
    .toString()
    .split('\n')
    .map(Number);

  const result1 = part1(input);
  const result2 = part2(input);

  console.log(JSON.stringify({ result1, result2 }, null, 2));
}

main();
