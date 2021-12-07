// Dependencies

const math = require('../helpers/math');

// Private

function calculateCost(input, target) {
  return input.reduce(
    (sum, value) => sum + math.factorial(Math.abs(value - target)),
    0
  );
}

// Public

function part2(input) {
  const median = math.median(input);
  const stdDev = math.stdDev(input);
  const min = math.round(median - stdDev);
  const max = math.round(median + stdDev);

  const costs = [];
  for (let i = min; i < max; i += 1) {
    costs.push(calculateCost(input, i));
  }

  return Math.min(...costs);
}

module.exports = { part2 };
