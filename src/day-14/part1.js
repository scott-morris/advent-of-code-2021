// Dependencies

const { countValues } = require('../helpers/math');

// Public

function performStep(polymer, rules) {
  const insertions = [];

  // Identify items to be inserted
  rules.forEach(({ pair, insert }) => {
    let position = 0;
    do {
      position = polymer.indexOf(pair, position);
      if (position > -1) {
        insertions.push({ index: position, insert });
      }
      position += 1;
    } while (position > 0);
  });

  // Sort the insertions by location
  insertions.sort((a, b) => a.index - b.index);

  // Process the insertions
  return insertions.reduce((str, { index, insert }, offset) => {
    const arr = str.split('');

    arr.splice(index + offset + 1, 0, insert);

    return arr.join('');
  }, polymer);
}

function performSteps({ template, rules }, numSteps) {
  let result = template;
  for (let i = 0; i < numSteps; i += 1) {
    result = performStep(result, rules);
  }
  return result;
}

function part1(input, iterations = 10) {
  const result = performSteps(input, iterations);
  const valueMap = countValues([...result]);
  const values = Array.from(valueMap.values());

  const max = Math.max(...values);
  const min = Math.min(...values);

  return max - min;
}

module.exports = { performStep, performSteps, part1 };
