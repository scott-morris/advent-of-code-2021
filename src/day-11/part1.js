// Dependencies

const { Matrix } = require('../helpers/matrix');

// Public

class Grid {
  constructor(data) {
    this.data = new Matrix(data);
    this.reset();
  }

  get value() {
    return this.data.data
      .map((row) => row.map(({ value }) => value).join(','))
      .join('\n');
  }

  reset() {
    this.data.map((value) => ({ value, flashed: false }));
  }

  step() {
    const self = this;
    let newFlash;
    let flashes = 0;

    // Increase all values by one and reset the flash.
    this.data.map(({ value }) => ({
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
        console.log(
          `Flashing on ${JSON.stringify(coords)} (${JSON.stringify({
            value,
            flashed,
          })})`
        );
        this.data.set(coords, { value, flashed: true });

        // indicate that there was at least one flash in this loop so we need to check again.
        newFlash = true;
        flashes += 1;

        // update the adjacents
        const adjacents = self.data.getAdjacents(coords, true);
        adjacents.forEach(({ x, y, data }) => {
          const adjValue = data.value;
          self.data.set({ x, y }, { value: adjValue + 1, ...data }, true);
        });
        // console.log(this.value);
      });
    } while (newFlash);

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
