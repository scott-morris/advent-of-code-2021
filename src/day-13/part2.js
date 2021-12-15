// Dependencies

const { generateGrid, fold } = require('./part1');

// Public

function part2(input) {
  const grid = generateGrid(input.coords);
  const folded = input.folds.reduce(
    (g, instructions) => fold(g, instructions),
    grid
  );

  folded.map((v) => (v === null ? ' ' : '#'));
  return folded.join();
}

module.exports = { part2 };
