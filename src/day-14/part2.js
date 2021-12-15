// Dependencies

const { Counter } = require('../helpers/counter');

// Private

function processRules(rules) {
  return rules.reduce(
    (obj, { pair, insert }) => ({ ...obj, [pair]: insert }),
    {}
  );
}

function processTemplate(template) {
  const pairs = new Counter();
  const letters = new Counter();

  template.split('').forEach((letter) => letters.increment(letter));

  for (let i = 0; i < template.length - 1; i += 1) {
    const pair = template.substring(i, i + 2);
    pairs.increment(pair);
  }

  return {
    pairs,
    letters,
  };
}

// Public

function processInput({ template, rules }) {
  return { counters: processTemplate(template), rules: processRules(rules) };
}

function performStep({ pairs, letters }, rules) {
  const arrPairs = Array.from(pairs.entries());

  arrPairs.forEach(([pair, count]) => {
    const insert = rules[pair];
    const [first, second] = pair;

    // remove the original pair [XY]
    pairs.decrement(pair, count);

    // add to the new pairs [XZ, ZY]
    pairs.increment(`${first}${insert}`, count);
    pairs.increment(`${insert}${second}`, count);

    // add to the count of individual letters
    letters.increment(insert, count);
  });

  return {
    pairs,
    letters,
  };
}

function performSteps({ counters, rules }, numSteps) {
  for (let i = 0; i < numSteps; i += 1) {
    performStep(counters, rules);
  }
  return counters;
}

function part2(input, iterations = 40) {
  const processedInput = processInput(input);
  const results = performSteps(processedInput, iterations);

  const values = Array.from(results.letters.values());
  const max = Math.max(...values);
  const min = Math.min(...values);

  return max - min;
}

module.exports = { processInput, performSteps, part2 };
