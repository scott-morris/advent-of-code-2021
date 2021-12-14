// Dependencies

const { Matrix } = require('../helpers/matrix');

// Public

class Grid {
  constructor(data) {
    this.data = new Matrix(data);
  }

  toJSON() {
    return { Grid: this.data };
  }

  step() {
    const self = this;
    let newFlash;
    let flashes = 0;

    // Convert to Object: Increase all values by one and add flash boolean.
    this.data.map((value) => ({
      value: value + 1,
      flashed: false,
    }));

    // Loop until there are no new flashes.
    do {
      newFlash = false;

      // eslint-disable-next-line no-loop-func
      this.data.forEach(({ value, flashed }, coords) => {
        // if it's not ready to flash or if it has already flashed, move along
        if (value <= 9 || flashed === true) {
          return;
        }

        // flash on this node
        this.data.set(coords, { value, flashed: true });

        // indicate that there was at least one flash in this loop so we need to check again.
        newFlash = true;
        flashes += 1;

        // update the adjacents
        const adjacents = self.data
          .getAdjacents(coords, {
            includeDiagonals: true,
          })
          .map(({ x, y }) => `${x},${y}`);

        this.data.map((initialValue, { x, y }) =>
          adjacents.includes(`${x},${y}`)
            ? { ...initialValue, value: initialValue.value + 1 }
            : initialValue
        );
      });
    } while (newFlash);

    // Convert back to number: clear any that have flashed.
    this.data.map(({ value, flashed }) => (flashed ? 0 : value));

    return flashes;
  }
}

function getFlashesOverTime(input, days) {
  const grid = new Grid(input);
  let flashes = 0;

  for (let i = 0; i < days; i += 1) {
    flashes += grid.step();
  }

  return flashes;
}

function part1(input) {
  return getFlashesOverTime(input, 100);
}

module.exports = { Grid, getFlashesOverTime, part1 };
