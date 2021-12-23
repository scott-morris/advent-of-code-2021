// Dependencies

const leftPad = require('../helpers/left-pad');

// Public

function parseInput(input) {
  return [...input].reduce(
    (result, char) =>
      result +
      leftPad(parseInt(char.toLowerCase(), 16).toString(2), { width: 4 }),
    ''
  );
}

module.exports = parseInput;
