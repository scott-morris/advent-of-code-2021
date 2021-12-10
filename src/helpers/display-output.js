// Libraries

const { Table } = require('console-table-printer');

// Dependencies

const { round } = require('./math');

// Private

function processResults(result1, result2) {
  return [result1, result2]
    .filter((r) => r !== undefined)
    .map(({ result, duration = -1 }, i) => ({
      Part: i + 1,
      Result: result,
      Duration: `${round(duration, 4)} s`,
    }));
}

// Public

function displayOutput(result1, result2) {
  const results = processResults(result1, result2);

  const table = new Table({
    title: 'Advent of Code 2021 Results',
    columns: [
      { name: 'Part' },
      { name: 'Result', color: 'white' },
      { name: 'Duration' },
    ],
  });

  table.addRows(results, { color: 'blue' });
  table.printTable();
}

module.exports = displayOutput;
