// Dependencies

const MapArray = require('../helpers/map-array');
const { createPaths } = require('./part1');

// Private

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function without(mapArray, key) {
  const copyMapArray = new MapArray(mapArray);
  copyMapArray.removeAll(key);
  return copyMapArray;
}

// Public

function allPossibilities(paths, location, destination, smallCave) {
  // If we've reached the end, we can bubble back up
  if (location === destination) {
    return [location];
  }

  if (!paths.has(location)) {
    return [];
  }

  const possibleNextSteps = Array.from(paths.get(location).values());
  if (possibleNextSteps.length === 0) {
    return [location];
  }

  const newPath =
    ['start', 'end'].includes(location) ||
    (isLowerCase(location) && location !== smallCave)
      ? without(paths, location)
      : paths;

  const nextSteps = possibleNextSteps
    .map((nextLocation) =>
      allPossibilities(
        newPath,
        nextLocation,
        destination,
        smallCave === location ? '' : smallCave
      )
    )
    .filter((a) => Array.isArray(a) && a.length > 0)
    .flat();

  return nextSteps.map((next) => [location].concat(next));
}

function possiblePaths(input, from, to) {
  const smallCaves = Array.from(input.keys()).filter(
    (key) => !['start', 'end'].includes(key) && isLowerCase(key)
  );

  const possibilities = smallCaves
    .map((smallCave) => allPossibilities(input, from, to, smallCave))
    .flat();

  const validPossibilities = possibilities
    .filter((pathArray) => pathArray.slice(-1)[0] === to)
    .map((a) => a.join(','));

  return Array.from(new Set(validPossibilities));
}

function part2(input) {
  const paths = createPaths(input);
  const possibilities = possiblePaths(paths, 'start', 'end');
  return possibilities.length;
}

module.exports = { possiblePaths, part2 };
