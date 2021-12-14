// Dependencies

const math = require('./math');

// Private

function validateCoords({ x, y }) {
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);

  if (
    parsedX !== Number(x) ||
    parsedY !== Number(y) ||
    parsedX < 0 ||
    parsedY < 0
  ) {
    return {};
  }

  return {
    x: parsedX,
    y: parsedY,
  };
}

// Public

function translateCoords(coords) {
  let result;
  if (Array.isArray(coords)) {
    const [x, y] = coords;
    result = { x, y };
  } else if (typeof coords === 'string') {
    const [x, y] = coords.split(',');
    result = { x, y };
  } else {
    const { x, y } = coords;
    result = { x, y };
  }

  return validateCoords(result);
}

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

    return this.data;
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

  // get length() {} // total number of elements
  // get width() {} // length of the longest row
  // get height() {} // number of rows

  get(coords, { defaultValue = -1, includeCoords = false } = {}) {
    const { x, y } = translateCoords(coords);

    const value = this?.data?.[y]?.[x] ?? defaultValue;

    return includeCoords ? { x, y, value } : value;
  }

  set(coords, value, { mustExist = true } = {}) {
    const { x, y } = translateCoords(coords);

    if (x < 0 || y < 0 || x === undefined || y === undefined) {
      return;
    }

    if (mustExist && (this?.data?.[y]?.[x] ?? 'DNE') === 'DNE') {
      return;
    }

    this.data[y][x] = value;
  }

  getAdjacents(coords, { includeDiagonals = false } = {}) {
    const self = this;
    const { x, y } = translateCoords(coords);
    const adjacents = [];

    // right, below, left, above
    adjacents.push(this.get({ x: x + 1, y }, { includeCoords: true }));
    adjacents.push(this.get({ x, y: y + 1 }, { includeCoords: true }));
    adjacents.push(this.get({ x: x - 1, y }, { includeCoords: true }));
    adjacents.push(this.get({ x, y: y - 1 }, { includeCoords: true }));

    if (includeDiagonals) {
      // BR, BL, TL, TR
      adjacents.push(this.get({ x: x + 1, y: y + 1 }, { includeCoords: true }));
      adjacents.push(this.get({ x: x - 1, y: y + 1 }, { includeCoords: true }));
      adjacents.push(this.get({ x: x - 1, y: y - 1 }, { includeCoords: true }));
      adjacents.push(this.get({ x: x + 1, y: y - 1 }, { includeCoords: true }));
    }

    return adjacents
      .filter(({ x: fx, y: fy }) => (self?.data?.[fy]?.[fx] ?? 'DNE') !== 'DNE')
      .map((c) => self.get(c, { includeCoords: true }));
  }

  transpose() {
    this.data = math.transpose(this.data);
  }

  toJSON() {
    return {
      Matrix: this.data,
    };
  }
}

module.exports = { translateCoords, Matrix };

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
