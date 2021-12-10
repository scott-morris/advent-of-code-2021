// Dependencies

const math = require('../helpers/math');
const { CLOSERS, processLine } = require('./part1');

// Private

const SCORES = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

// Public

function scoreCompletionString(str) {
  return str.split('').reduce((sum, letter) => sum * 5 + SCORES[letter], 0);
}

function getCompletionString(line) {
  const { depth } = processLine(line);
  return depth
    .split('')
    .reverse()
    .map((opener) => CLOSERS[opener])
    .join('');
}

function removeCorruptedLines(input) {
  return input.filter((line) => !processLine(line).corrupted);
}

function part2(input) {
  const scores = removeCorruptedLines(input)
    .map((line) => getCompletionString(line))
    .map((str) => scoreCompletionString(str))
    .filter((score) => score > 0);

  return math.median(scores);
}

module.exports = {
  scoreCompletionString,
  getCompletionString,
  removeCorruptedLines,
  part2,
};
