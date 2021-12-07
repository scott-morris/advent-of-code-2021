// Dependencies

const { transpose } = require('../helpers/math');

// Public

function callNumber(num, cards) {
  return cards.map((card) =>
    card.map((row) => row.map((item) => (item === num ? 'x' : item)))
  );
}

function isWinner(card) {
  const combinations = [...card, ...transpose(card)];
  return combinations.some((combo) => combo.every((item) => item === 'x'));
}

function getScore(card) {
  return card
    .flat()
    .filter((item) => typeof item === 'number')
    .reduce((sum, num) => (sum += num), 0);
}

module.exports = { callNumber, isWinner, getScore };
