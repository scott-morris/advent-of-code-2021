// Dependencies

const MapArray = require('../helpers/map-array');

// Private

function isLowerCase(str) {
  return str === str.toLowerCase();
}

function copyWithout(mapArray, key) {
  const copyMapArray = new MapArray(mapArray);
  copyMapArray.removeAll(key);
  return copyMapArray;
}

// Public

function allPossibilities(paths, location, destination) {
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

  const newPath = isLowerCase(location) ? copyWithout(paths, location) : paths;
  const nextSteps = possibleNextSteps
    .map((nextLocation) => allPossibilities(newPath, nextLocation, destination))
    .filter((a) => Array.isArray(a) && a.length > 0)
    .flat();

  return nextSteps.map((next) => [location].concat(next));
}

function createPaths(input) {
  return input.reduce((mapArray, [source, dest]) => {
    mapArray.add(source, dest);
    mapArray.add(dest, source);

    return mapArray;
  }, new MapArray());
}

function possiblePaths(input, from, to) {
  const possibilities = allPossibilities(input, from, to);
  return possibilities.filter((pathArray) => pathArray.slice(-1)[0] === to);
}

function part1(input) {
  const paths = createPaths(input);
  const possibilities = possiblePaths(paths, 'start', 'end');
  return possibilities.length;
}

module.exports = { allPossibilities, createPaths, part1 };
