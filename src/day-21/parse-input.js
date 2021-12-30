// Public

function parseInput(input) {
  return input.map((player) => {
    const [, position] = player.match(/Player \d starting position: (\d+)/);
    return parseInt(position, 10);
  });
}

module.exports = parseInput;
