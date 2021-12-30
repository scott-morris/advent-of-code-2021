// Public

function parseInput(input) {
  return input.map((instruction) =>
    instruction
      .split(' ')
      .map((val) => (Number.isNaN(Number(val)) ? val : parseInt(val, 10)))
  );
}

module.exports = parseInput;
