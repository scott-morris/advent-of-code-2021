// Dependencies

const Matrix = require('../helpers/matrix');

// Public

function generateGrid(coords) {
  const matrix = new Matrix();

  coords.forEach((coord) => {
    matrix.set(coord, '#', { mustExist: false });
  });
}

function fold(grid, instruction) {}

function countEmpty(grid) {
  // Find out the width of the widest row
  const width = grid.reduce((widest, row) => Math.max(widest, row.length), 0);

  return grid.reduce(
    (count, row) => count + (widest - Object.keys(row).length),
    0
  );
}

function part1(input) {
  const grid = generateGrid(input.coords);
  const folded = fold(grid, input.folds[0]);

  return countEmpty(folded);
}

module.exports = { generateGrid, fold, countEmpty, part1 };
