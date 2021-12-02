async function processData(input) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  const move = {
    forward: (amt) => {
      horizontal += amt;
      depth += aim * amt;
    },
    down: (amt) => {
      aim += amt;
    },
    up: (amt) => {
      aim -= amt;
    },
  };

  input.forEach((instruction) => {
    const [, direction, amount] = instruction.match(
      /^(forward|down|up) (\d+)$/
    );
    move[direction](Number(amount));
  });

  return { horizontal, depth, aim };
}

async function part2(input) {
  const { horizontal, depth } = await processData(input);
  return horizontal * depth;
}

module.exports = { processData, part2 };
