// Private

function transformCard(cardArr) {
  const [, ...rows] = cardArr;
  return rows.map((row) => row.trim().split(/\s+/).map(Number));
}

function parseCards(arr) {
  const cards = [];

  do {
    const cardArr = arr.splice(0, 6);
    cards.push(transformCard(cardArr));
  } while (arr.length);

  return cards;
}

// Public

function parseInput(input) {
  const [rawPulls, ...rawCards] = input;

  return {
    pulls: rawPulls.trim().split(',').map(Number),
    cards: parseCards(rawCards),
  };
}

module.exports = parseInput;
