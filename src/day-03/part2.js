// Private

const countBits = (arr, index) =>
  arr.reduce(
    ([zeroes, ones], str) => [
      str[index] === '0' ? zeroes + 1 : zeroes,
      str[index] === '1' ? ones + 1 : ones,
    ],
    [0, 0]
  );

function filterOxygen(arr, index) {
  // find the most common value at `index`
  const [zeroes, ones] = countBits(arr, index);
  // keep most common (or 1 if equal)
  const keepValue = zeroes === ones || ones > zeroes ? '1' : '0';

  const filteredList = arr.filter((str) => str[index] === keepValue);
  return filteredList.length > 1
    ? filterOxygen(filteredList, (index + 1) % filteredList[0].length)
    : filteredList[0];
}

function filterCO2(arr, index) {
  // find the least common value at `index`
  const [zeroes, ones] = countBits(arr, index);
  // keep least common (or 0 if equal)
  const keepValue = zeroes === ones || ones > zeroes ? '0' : '1';

  const filteredList = arr.filter((str) => str[index] === keepValue);
  return filteredList.length > 1
    ? filterCO2(filteredList, (index + 1) % filteredList[0].length)
    : filteredList[0];
}

// Public

function getDiagnostics(input) {
  const oxygenBinary = filterOxygen(input, 0);
  const co2Binary = filterCO2(input, 0);

  return { oxygen: parseInt(oxygenBinary, 2), co2: parseInt(co2Binary, 2) };
}

function part2(input) {
  const { oxygen, co2 } = getDiagnostics(input);

  return oxygen * co2;
}

module.exports = { getDiagnostics, part2 };
