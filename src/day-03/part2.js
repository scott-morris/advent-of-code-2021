// Private

const countBits = (arr, index) =>
  arr.reduce(
    ([zeroes, ones], str) => [
      str[index] === '0' ? zeroes + 1 : zeroes,
      str[index] === '1' ? ones + 1 : ones,
    ],
    [0, 0]
  );

// Public

function getOxygen(arr, index = 0) {
  // find the most common value at `index`
  const [zeroes, ones] = countBits(arr, index);
  // keep most common (or 1 if equal)
  const keepValue = zeroes === ones || ones > zeroes ? '1' : '0';

  const filteredList = arr.filter((str) => str[index] === keepValue);
  return filteredList.length > 1
    ? getOxygen(filteredList, (index + 1) % filteredList[0].length)
    : parseInt(filteredList[0], 2);
}

function getCO2(arr, index = 0) {
  // find the least common value at `index`
  const [zeroes, ones] = countBits(arr, index);
  // keep least common (or 0 if equal)
  const keepValue = zeroes === ones || ones > zeroes ? '0' : '1';

  const filteredList = arr.filter((str) => str[index] === keepValue);
  return filteredList.length > 1
    ? getCO2(filteredList, (index + 1) % filteredList[0].length)
    : parseInt(filteredList[0], 2);
}

function part2(input) {
  const oxygen = getOxygen(input);
  const co2 = getCO2(input);

  return oxygen * co2;
}

module.exports = { getOxygen, getCO2, part2 };
