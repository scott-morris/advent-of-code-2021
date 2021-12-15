// Private

function parseRules(rules) {
  return rules.map((rule) => {
    const [, pair, insert] = rule.match(/^([A-Z]{2}) -> ([A-Z])$/);
    return { pair, insert };
  });
}

// Public

function parseInput(input) {
  const [template, , ...rules] = input;
  return {
    template,
    rules: parseRules(rules),
  };
}

module.exports = parseInput;
