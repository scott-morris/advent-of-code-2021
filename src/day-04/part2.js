// Dependencies

const { callNumber, isWinner, getScore } = require('./common');

// Public

function runSimulation({ pulls: givenPulls, cards }) {
  let num;
  let losingCard;
  let losingCardScore = -1;

  // Since we're going to mutate, make a copy before proceeding
  let losingCards = JSON.parse(JSON.stringify(cards));
  const pulls = [...givenPulls];

  do {
    num = pulls.shift();
    losingCards = callNumber(num, losingCards);

    if (losingCards.length > 1) {
      losingCards = losingCards.filter((card) => !isWinner(card));
    } else {
      losingCard = losingCards[0];
      if (isWinner(losingCard)) {
        losingCardScore = getScore(losingCard);
      }
    }
  } while (pulls.length > 0 && losingCardScore === -1);

  return {
    losingCardScore,
    losingNumber: num,
  };
}

function part2(input) {
  const { losingCardScore, losingNumber } = runSimulation(input);

  return losingCardScore * losingNumber;
}

module.exports = { runSimulation, part2 };
