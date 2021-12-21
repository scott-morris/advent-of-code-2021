// Dependencies

const { Matrix } = require('../helpers/matrix');

// Private

const expansion = new Matrix([
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
]);

function expansionAdd(a, b) {
  const sum = a + b;

  return sum < 10 ? sum : (sum + 1) % 10;
}

// Public

function parseInput(input) {
  return new Matrix(input);
}

function expandInput(input) {
  const expanded = new Matrix();
  const { height, width } = input;

  input.forEach((value, { x, y }) => {
    expansion.forEach((expValue, { x: eX, y: eY }) => {
      const expX = x + eX * width;
      const expY = y + eY * height;
      expanded.set({ x: expX, y: expY }, expansionAdd(value, expValue), {
        mustExist: false,
      });
    });
  });

  return expanded;
}

module.exports = { expandInput, parseInput };
