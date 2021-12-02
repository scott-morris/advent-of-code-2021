// Libraries

const fs = require('fs-extra');
const path = require('path');

// Dependencies

const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Public

async function main() {
  const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'))
    .toString()
    .split('\n');
  const result1 = await part1(input);
  const result2 = await part2(input);

  console.log(JSON.stringify({ result1, result2 }, null, 2));
}

main();
