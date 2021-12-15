// Public

function parseInput(input) {
  return input.map((str) => {
    const [, start, finish] = str.match(/^([A-Za-z]+)-([A-Za-z]+)$/);
    return [start, finish];
  });
}

module.exports = parseInput;
