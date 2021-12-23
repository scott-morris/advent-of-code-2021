// Dependencies

const { processMultiplePackets } = require('./part1');

// Public

function part2(input) {
  const { packets } = processMultiplePackets(input);
}

module.exports = { part2 };
