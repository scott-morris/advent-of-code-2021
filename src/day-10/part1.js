// Private

const STARTS = ['(', '[', '{', '<'];
const CLOSERS = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};
const SCORES = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

// Public

function processLine(line) {
  return line.split('').reduce(
    (res, letter) => {
      // If it's already identified as corrupted, just pass it along
      if (res.corrupted) {
        return res;
      }

      const { depth } = res;

      // Adding depth
      if (STARTS.includes(letter)) {
        return {
          corrupted: false,
          depth: depth + letter,
        };
      }

      // Removing depth
      if (letter === CLOSERS[depth.substr(-1)]) {
        return {
          corrupted: false,
          depth: depth.substr(0, depth.length - 1),
        };
      }

      // It's corrupted. Return the letter.
      return {
        corrupted: true,
        illegal: letter,
      };
    },
    { corrupted: false, depth: '' }
  );
}

function getCorruptedLines(input) {
  return input.filter((line) => {
    const { corrupted } = processLine(line);
    return corrupted;
  });
}

function findIllegalCharacter(line) {
  const { illegal } = processLine(line);

  return illegal;
}

function part1(input) {
  const corruptedLines = getCorruptedLines(input);
  const illegalChars = corruptedLines.map((line) => findIllegalCharacter(line));

  return illegalChars.reduce((total, char) => total + SCORES[char], 0);
}

module.exports = {
  CLOSERS,
  processLine,
  getCorruptedLines,
  findIllegalCharacter,
  part1,
};
