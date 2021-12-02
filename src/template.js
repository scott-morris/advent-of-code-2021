// Libraries

const fs = require('fx-extra');
const path = require('path');

// Dependencies

// Private

async function run1(input) {}

async function run2(input) {}

// Public

async function main() {
  //   const input = fs.readFileSync(path.join(__dirname, 'input.txt')).split('\n');
  //   const input = fs.readJSONSync(path.join(__dirname, 'input.json'));

  const result1 = run1(input);
  const result2 = run2(input);

  console.log(JSON.stringify({ result1, result2 }, null, 2));
}

module.exports = {
  run1,
  run2,
  main,
};
