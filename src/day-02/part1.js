function processData(input) {
  let horizontal = 0;
  let depth = 0;

  const move = {
    forward: (amt) => {
      horizontal += amt;
    },
    down: (amt) => {
      depth += amt;
    },
    up: (amt) => {
      depth -= amt;
    },
  };

  input.forEach((instruction) => {
    const [, direction, amount] = instruction.match(
      /^(forward|down|up) (\d+)$/
    );
    move[direction](Number(amount));
  });

  return { horizontal, depth };
}

function part1(input) {
  const { horizontal, depth } = processData(input);
  return horizontal * depth;
}

module.exports = { processData, part1 };
