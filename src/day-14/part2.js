// Dependencies

const { performStep, part1 } = require('./part1');

// Public

function splitTemplate({ template, rules }) {
  const pairs = rules.map(({ pair }) => pair);
  let i;
  for (i = 0; i < template.length - 1; i += 1) {
    const pair = template.substring(i, i + 1);
    if (!pairs.includes(pair)) {
      break;
    }
  }
  return i === template.length - 1
    ? [template]
    : [template.slice(0, i), template.slice(i)];
}

function performSteps({ template, rules }, numSteps) {
  let result = template;
  for (let i = 0; i < numSteps; i += 1) {
    result = performStep(result, rules);
  }
  return result;
}

function part2(input) {}

module.exports = { splitTemplate, part2 };
