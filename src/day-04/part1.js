// Dependencies

const { callNumber, isWinner, getScore } = require('./common');

// Private

function findWinner(cards) {
  const winners = cards.filter(isWinner);
  return cards.indexOf(winners?.[0]);
}

// Public

function runSimulation({ pulls: givenPulls, cards: givenCards }) {
  let winningCardIndex = -1;
  let num;

  // Since we're going to mutate, make a copy before proceeding
  let cards = JSON.parse(JSON.stringify(givenCards));
  const pulls = [...givenPulls];

  do {
    num = pulls.shift();
    cards = callNumber(num, cards);

    winningCardIndex = findWinner(cards);
  } while (pulls.length > 0 && winningCardIndex === -1);

  return {
    winningCardIndex,
    winningCard: cards[winningCardIndex],
    winningCardScore: getScore(cards[winningCardIndex]),
    winningNumber: num,
  };
}

function part1(input) {
  const { winningCard, winningCardIndex, winningCardScore, winningNumber } =
    runSimulation(input);

  return winningCardScore * winningNumber;
}

module.exports = { part1 };
