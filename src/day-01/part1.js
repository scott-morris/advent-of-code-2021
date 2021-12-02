module.exports = async function part1(input) {
  return input.reduce(
    (tally, value, idx) =>
      idx > 0 && value > input[idx - 1] ? tally + 1 : tally,
    0
  );
};
