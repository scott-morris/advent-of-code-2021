// Public

function getAdjacents(matrix, coords) {
  const adjacents = [];
  const [x, y] = coords;

  // Let's arbitrarily follow the CSS pattern of right, bottom, left, top
  adjacents.push({ x: x + 1, y, val: matrix?.[y]?.[x + 1] });
  adjacents.push({ x, y: y + 1, val: matrix?.[y + 1]?.[x] });
  adjacents.push({ x: x - 1, y, val: matrix?.[y]?.[x - 1] });
  adjacents.push({ x, y: y - 1, val: matrix?.[y - 1]?.[x] });

  return adjacents.filter(({ val }) => typeof val === 'number');
}

function getLowPoints(input) {
  const lowPoints = [];

  for (let y = 0; y < input.length; y += 1) {
    const row = input[y];
    for (let x = 0; x < row.length; x += 1) {
      const val = row[x];

      const adjacents = getAdjacents(input, [x, y]);
      const adjacentValues = adjacents.map((loc) => loc.val);

      if (val < Math.min(...adjacentValues)) {
        lowPoints.push({ x, y, val });
      }
    }
  }

  return lowPoints;
}

function part1(input) {
  const lowPoints = getLowPoints(input);
  return lowPoints.reduce((risk, { val }) => risk + val + 1, 0);
}

module.exports = { getAdjacents, getLowPoints, part1 };
