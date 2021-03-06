const { part1 } = require('./part1.js');

function part2(input) {
  const slidingTotal = input
    .map((value, idx) => {
      if (idx > input.length - 3) {
        return false;
      }
      return value + input[idx + 1] + input[idx + 2];
    })
    .filter(Boolean);

  return part1(slidingTotal);
}

module.exports = { part2 };
