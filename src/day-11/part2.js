// Dependencies

const { Grid } = require('./part1');

// Public

function part2(input) {
  const grid = new Grid(input);
  const numElements = grid.data.data.length * grid.data.data[0].length; // x * y

  let count = 0;
  let flashes;
  do {
    count += 1;
    flashes = grid.step();
    // console.log(`${count}: ${flashes}/${numElements}`);
  } while (flashes !== numElements);

  return count;
}

module.exports = { part2 };
