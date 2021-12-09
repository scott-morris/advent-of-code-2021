// Public

function getLowPoints(input) {}

function part1(input) {
  const lowPoints = getLowPoints(input);
  return lowPoints.reduce((risk, val) => risk + val + 1, 0);
}

module.exports = { getLowPoints, part1 };
