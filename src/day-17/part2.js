// Dependencies

const { lands } = require('./part1');

// Public

function getHitsAt(y, input) {
  const hits = [];
  const [, xMax] = input.x;

  for (let x = 1, adjustment = 1; x < xMax * 2; x += 1) {
    adjustment = lands([x, y], input).adjustment;

    if (adjustment === 0) {
      hits.push([x, y]);
    }
  }

  return hits;
}

function findHits(input, startingVelocity = 1000) {
  let hits = [];
  const [yMin] = input.y;

  for (let y = startingVelocity; y >= yMin; y -= 1) {
    const yHits = getHitsAt(y, input);
    hits.push(yHits);
  }

  return hits.flat();
}

function part2(input, startingVelocity = 1000) {
  return findHits(input, startingVelocity).length;
}

module.exports = { getHitsAt, findHits, part2 };
