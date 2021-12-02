// Libraries

const fs = require('fs-extra');
const path = require('path');

// Dependencies

// Private

async function run1(input) {
  return input.reduce(
    (tally, value, idx) =>
      idx > 0 && value > input[idx - 1] ? tally + 1 : tally,
    0
  );
}

async function run2(input) {
  const slidingTotal = input
    .map((value, idx) => {
      if (idx > input.length - 3) {
        return false;
      }
      return value + input[idx + 1] + input[idx + 2];
    })
    .filter(Boolean);

  return run1(slidingTotal);
}

// Public

async function main() {
  const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'))
    .toString()
    .split('\n')
    .map(Number);

  const result1 = await run1(input);
  const result2 = await run2(input);

  console.log(JSON.stringify({ result1, result2 }, null, 2));
}

module.exports = {
  run1,
  run2,
  main,
};

if (require.main === module) {
  main();
}
