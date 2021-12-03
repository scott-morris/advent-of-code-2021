// Private

const countBits = (arr, index) =>
  arr.reduce(
    ([zeroes, ones], str) => [
      str[index] === '0' ? zeroes + 1 : zeroes,
      str[index] === '1' ? ones + 1 : ones,
    ],
    [0, 0]
  );

function reduceList(fn, arr, index = 0) {
  // find the most common value at `index`
  const [zeroes, ones] = countBits(arr, index);

  // determine the value to keep
  const keepValue = fn(zeroes, ones);

  // filter the list
  const filteredList = arr.filter((str) => str[index] === keepValue);

  // if we're down to the last one, return it in decimal. Otherwise, continue filtering
  return filteredList.length === 1
    ? parseInt(filteredList[0], 2)
    : reduceList(fn, filteredList, (index + 1) % filteredList[0].length);
}

// Public

function getOxygen(input) {
  // keep most common (or 1 if equal)
  const keepValue = (zeroes, ones) =>
    zeroes === ones || ones > zeroes ? '1' : '0';

  return reduceList(keepValue, input);
}

function getCO2(input) {
  // keep least common (or 0 if equal)
  const keepValue = (zeroes, ones) =>
    zeroes === ones || ones > zeroes ? '0' : '1';

  return reduceList(keepValue, input);
}

function part2(input) {
  const oxygen = getOxygen(input);
  const co2 = getCO2(input);

  return oxygen * co2;
}

module.exports = { getOxygen, getCO2, part2 };
