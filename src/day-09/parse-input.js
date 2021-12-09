// Public

function parseInput(input) {
  return input.map((str) => str.split('').map(Number));
}

module.exports = parseInput;
