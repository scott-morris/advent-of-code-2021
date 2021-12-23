// Dependencies

const { lands } = require('./part1');

// Public

function part2(input, startingVelocity = 1000) {
  let hits = 0;
  let vX = 1;

  for (let vY = startingVelocity; vY > 0; ) {
    const attempt = lands([vX, vY], input);

    if (attempt.adjustment === 1) {
      // keep angling down
      vX += 1;
    } else {
      hits += attempt.adjustment === 0 ? attempt.numHits : 0;
      vX = 1;
      vY -= 1;
    }
  }

  return hits;
}

module.exports = { part2 };
