// Dependencies

const { Matrix } = require('../helpers/matrix');

// Public

function parseInput(input) {
  return new Matrix(input);
}

module.exports = parseInput;
