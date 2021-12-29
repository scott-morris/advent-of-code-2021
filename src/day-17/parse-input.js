// Public

function parseInput(input) {
  const parsed = input.match(
    /^target area: x=(-?\d+)..(-?\d+), y=(-?\d+)..(-?\d+)$/
  );

  const [, xMin, xMax, yMin, yMax] = parsed.map((i) => parseInt(i, 10));

  return {
    x: [xMin, xMax],
    y: [yMin, yMax],
  };

  return [...input].reduce(
    (result, char) =>
      result +
      leftPad(parseInt(char.toLowerCase(), 16).toString(2), { width: 4 }),
    ''
  );
}

module.exports = parseInput;
