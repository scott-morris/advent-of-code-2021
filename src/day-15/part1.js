// Dependencies

const { matrixFlags, Matrix } = require('../helpers/matrix');

// Private

function getLowestValue(adjacents) {
  const adjacentRisks = adjacents
    .filter(({ value }) => value > -1)
    .map(({ value }) => value);

  return adjacentRisks.length ? Math.min(...adjacentRisks) : 0;
}

// Public

// Get the lowest risk to move to any position in the matrix
function getLowestRisk(matrix) {
  const riskMatrix = new Matrix([[0]]);

  // First Pass, just look at top and left
  matrix.forEach((thisValue, coords) => {
    const { x, y } = coords;
    if (x === 0 && y === 0) {
      return;
    }

    const adjacents = riskMatrix.getAdjacents(coords, {
      includeDirections: matrixFlags.TOP + matrixFlags.LEFT,
    });

    const lowestRisk = getLowestValue(adjacents);

    riskMatrix.set(coords, lowestRisk + thisValue, { mustExist: false });
  });

  // Double check results with all four cardinal directions
  for (let changed = true; changed; ) {
    changed = false;

    riskMatrix.map((currentRiskValue, coords) => {
      const adjacents = riskMatrix.getAdjacents(coords);
      const lowestRisk = getLowestValue(adjacents);
      const matrixValue = matrix.get(coords);

      if (matrixValue + lowestRisk < currentRiskValue) {
        changed = true;
        return matrixValue + lowestRisk;
      }

      return currentRiskValue;
    });
  }

  return riskMatrix;
}

/**
 * Calculate the lowest risk
 * @param {import('../helpers/matrix.js').Matrix} input the puzzle input
 * @returns {Number}
 */
function part1(input) {
  const { width, height } = input;

  //   const topHalf =

  const lowestRisk = getLowestRisk(input);

  return lowestRisk.data[height - 1][width - 1];
}

module.exports = { getLowestRisk, part1 };
