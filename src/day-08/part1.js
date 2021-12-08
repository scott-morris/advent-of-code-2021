// Public

function countUniqueDigits({ output }) {
  return output.reduce(
    (sum, control) => ([2, 3, 4, 7].includes(control.length) ? sum + 1 : sum),
    0
  );
}

function part1(input) {
  return input.reduce(
    (total, display) => total + countUniqueDigits(display),
    0
  );
}

module.exports = { countUniqueDigits, part1 };
