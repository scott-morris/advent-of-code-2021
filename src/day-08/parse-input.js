// Public

function parseInput(input) {
  return input.map((line) => {
    const [rawSignal, rawOutput] = line.split(' | ');
    return {
      signal: rawSignal.split(' '),
      output: rawOutput.split(' '),
    };
  });
}

module.exports = parseInput;
