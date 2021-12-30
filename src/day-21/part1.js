// Public

function roll(position, startingDieValue = 1) {
  const movement = startingDieValue * 3 + 3;
  const land = position + movement;

  return land % 10 === 0 ? 10 : land % 10;
}

function game(input) {
  let players = input.map((position) => ({ position, score: 0 }));
  let dieValue = 1;

  for (let maxScore = 0; maxScore < 1000; ) {
    // eslint-disable-next-line no-loop-func
    players = players.map(({ position, score }) => {
      if (maxScore >= 1000) {
        return { position, score };
      }

      const newPosition = roll(position, dieValue);
      const newScore = score + newPosition;

      dieValue += 3;
      maxScore = Math.max(maxScore, newScore);

      return {
        position: newPosition,
        score: newScore,
      };
    });
  }

  return { players, rolls: dieValue - 1 };
}

function part1(input) {
  const { players, rolls } = game(input);
  const losingScore = Math.min(...players.map(({ score }) => score));
  return losingScore * rolls;
}

module.exports = { roll, game, part1 };
