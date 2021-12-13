// Dependencies

const Matrix = require('../helpers/matrix');

// Public

class Grid {
  constructor(data) {
    this.data = new Matrix(data);
    this.reset();
  }

  reset() {
    this.data.map((value) => ({ value, flashed: false }));
  }

  step() {
    const self = this;
    this.data.forEach((value, coords) => {
      // increase all by one
      this.data.map(({ value, flashed }) => ({ value: value + 1, flashed }));

      let flash;
      let flashes = 0;
      do {
        flash = false;
        this.data.forEach(({ value, flashed }, coords) => {
          // if it's not ready to flash or if it has already flashed, move along
          if (value <= 9 || flashed === true) {
            return;
          }

          // flash on this node
          const adjacents = self.data.getAdjacents(coords, true);
          adjacents.forEach(({ x, y, data }) => {
            const { value, flashed } = data;
            self.data.set({ x, y }, { value: value + 1, flashed });

            // indicate that there was at least one flash in this loop so we need to check again.
            flash = true;
            flashes += 1;
          });
        });
      } while (flash === false);
    });
  }
}

function part1(input) {}

module.exports = { Grid, part1 };
