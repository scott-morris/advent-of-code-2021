// Public

function parseInput(input) {
  return input.map((str) => {
    const [, x1, y1, x2, y2] = str.match(/^\s*(\d+),(\d+) -> (\d+),(\d+)$/);
    return {
      source: { x: parseInt(x1, 10), y: parseInt(y1, 10) },
      dest: { x: parseInt(x2, 10), y: parseInt(y2, 10) },
    };
  });
}

module.exports = parseInput;
