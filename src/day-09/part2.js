// Dependencies

const { getAdjacents, getLowPoints } = require('./part1');

// Private

function explore(matrix, coords) {
  const seen = new Set();
  const [startX, startY] = coords;

  const key = ({ x, y }) => `${x},${y}`;

  const exploreNode = (node) => {
    const thisNode = key(node);

    // If we've already been here, we can move along
    if (seen.has(thisNode)) {
      return;
    }

    seen.add(thisNode);

    // Don't go into coords we've already seen or that equal 9.
    const adjacents = getAdjacents(matrix, [node.x, node.y]);
    const searchIn = adjacents.filter((n) => !seen.has(key(n)) && n.val < 9);

    searchIn.forEach(exploreNode);
  };

  exploreNode({ x: startX, y: startY });

  return seen;
}

// Public

function getBasinSize(matrix, [x, y]) {
  const exploration = explore(matrix, [x, y]);
  return exploration.size;
}

function part2(input) {
  const lowPoints = getLowPoints(input);
  const basinSizes = lowPoints.map(({ x, y }) => getBasinSize(input, [x, y]));

  // Multiply the top 3 values.
  return basinSizes
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((res, val) => res * val, 1);
}

module.exports = { getBasinSize, part2 };
