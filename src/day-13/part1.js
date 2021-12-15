// Dependencies

const { Matrix } = require('../helpers/matrix');

// Public

function generateGrid(coords) {
  const matrix = new Matrix();

  coords.forEach((coord) => {
    matrix.set(coord, '#', { mustExist: false });
  });

  return matrix;
}

function fold(grid, { axis, index }) {
  if (axis !== 'x' && axis !== 'y') {
    return grid;
  }

  const toFold = grid.split({ axis, index, includeSplit: false });
  toFold.flip(axis);

  grid.merge(toFold, (a, b) => (a === null ? b : a));

  return grid;
}

function part1(input) {
  const grid = generateGrid(input.coords);
  const folded = fold(grid, input.folds[0]);

  return folded.length;
}

module.exports = { generateGrid, fold, part1 };
