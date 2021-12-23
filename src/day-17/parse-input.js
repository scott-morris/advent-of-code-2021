// Public

function parseInput(input) {
  const [, minX, maxX, minY, maxY] = input.match(
    /^target area: x=(-?\d+)\.\.(-?\d+), y=(-?\d+)\.\.(-?\d+)$/
  );

  return {
    x: [parseInt(minX, 10), parseInt(maxX, 10)],
    y: [parseInt(minY, 10), parseInt(maxY, 10)],
  };
}

module.exports = parseInput;
