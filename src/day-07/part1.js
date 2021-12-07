// Dependencies

const math = require('../helpers/math');

// Public

function cost(value, target) {
  return Math.abs(value - target);
}

function calculateCost(input, target) {
  return input.reduce((sum, value) => sum + cost(value, target), 0);
}

function part1(input) {
  const avg = math.average(input);
  const stdDev = math.stdDev(input);
  const min = math.round(avg - stdDev);
  const max = math.round(avg + stdDev);

  const costs = [];
  for (let i = min; i < max; i += 1) {
    costs.push(calculateCost(input, i));
  }

  return Math.min(...costs);
}

module.exports = { cost, calculateCost, part1 };
