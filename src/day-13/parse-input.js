// Private

function parseCoords(arr) {
  return arr.map((str) => {
    const [x, y] = str.split(',').map((v) => parseInt(v, 10));
    return { x, y };
  });
}

function parseFolds(arr) {
  return arr.map((str) => {
    const [, axis, index] = str.match(/^fold along ([x|y])=(\d+)$/);

    return { axis, index: parseInt(index, 10) };
  });
}

// Public

function parseInput(input) {
  const split = input.indexOf('');

  return {
    coords: parseCoords(input.slice(0, split)),
    folds: parseFolds(input.slice(split + 1)),
  };
}

module.exports = parseInput;
