// Dependencies

const math = require('./math');

// Private

function translateCoords(coords) {
  if (Array.isArray(coords)) {
    const [x, y] = coords;
    return { x, y };
  }

  if (typeof coords === 'string') {
    const [x, y] = coords.split(',');
    return { x, y };
  }

  const { x, y } = coords;
  return { x, y };
}

// Public

/**
 * @class
 */
class Matrix {
  constructor(data = []) {
    // Convert incoming data to a 2 dimensional array
    this.data = [...data].map((row) => [...row].map(Number));
  }

  /**
   * @param {Matrix~Loop} fn
   */
  forEach(fn) {
    const self = this;
    const rows = this.data;
    rows.forEach((row, y) => {
      row.forEach((val, x) => {
        fn(val, { x, y }, self);
      });
    });
  }

  map(fn) {
    const self = this;
    this.data = this.data.map((row, y) =>
      row.map((val, x) => fn(val, { x, y }, self))
    );
  }

  reduce(fn, initialValue) {
    const self = this;
    const flattened = this.data
      .map((rows, y) => rows.map((val, x) => ({ val, x, y })))
      .flat();

    return flattened.reduce(
      (previousValue, { val, x, y }) => fn(previousValue, val, { x, y }, self),
      initialValue
    );
  }

  get(coords, defaultValue = -1) {
    const { x, y } = translateCoords(coords);

    const data = this?.data?.[y]?.[x] ?? defaultValue;

    return {
      x,
      y,
      data,
    };
  }

  set(coords, value, mustExist = false) {
    const { x, y } = translateCoords(coords);

    if (x < 0 || y < 0) {
      return;
    }

    if (mustExist && (this?.data?.[y]?.[x] ?? 'DNE') === 'DNE') {
      return;
    }

    this.data[y][x] = value;
  }

  getAdjacents(coords, includeDiagonals = false) {
    const self = this;
    const { x, y } = translateCoords(coords);
    const adjacents = [];

    // right, below, left, above
    adjacents.push(this.get({ x: x + 1, y }));
    adjacents.push(this.get({ x, y: y + 1 }));
    adjacents.push(this.get({ x: x - 1, y }));
    adjacents.push(this.get({ x, y: y - 1 }));

    if (includeDiagonals) {
      // BR, BL, TL, TR
      adjacents.push(this.get({ x: x + 1, y: y + 1 }));
      adjacents.push(this.get({ x: x - 1, y: y + 1 }));
      adjacents.push(this.get({ x: x - 1, y: y - 1 }));
      adjacents.push(this.get({ x: x + 1, y: y - 1 }));
    }

    return adjacents
      .filter(({ x: fx, y: fy }) => (this?.data?.[fy]?.[fx] ?? 'DNE') !== 'DNE')
      .map((c) => self.get(c));
  }

  transpose() {
    this.data = math.transpose(this.data);
  }
}

module.exports = Matrix;

/**
 * @typedef Matrix~CoordsObject
 * @property {number} x the x coordinate
 * @property {number} y the y coordinate
 */

/**
 * @callback Matrix~Loop
 * @param {*} value the value at the coordinates
 * @param {Matrix~CoordsObject} coords the coordinates object
 * @param {Matrix} matrix the matrix
 */
