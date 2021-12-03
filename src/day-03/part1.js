// Public

function transposeStringArray(arr) {
  const output = [];
  arr.forEach((str) => {
    str.split('').forEach((letter, idx) => {
      output[idx] = `${output[idx] || ''}${letter}`;
    });
  });
  return output;
}

function countBits(str) {
  const sorted = str.split('').sort().join();
  const zeroes = sorted.indexOf('1');
  const ones = sorted.length - zeroes;

  return [zeroes, ones];
}

function getDiagnostics(input) {
  let gammaBinary = '';
  let epsilonBinary = '';

  const transposedArray = transposeStringArray(input);
  transposedArray.forEach((str) => {
    const [zeroes, ones] = countBits(str);
    gammaBinary += zeroes > ones ? '0' : '1';
    epsilonBinary += zeroes > ones ? '1' : '0';
  });

  return {
    gamma: parseInt(gammaBinary, 2),
    epsilon: parseInt(epsilonBinary, 2),
  };
}

function part1(input) {
  const { gamma, epsilon } = getDiagnostics(input);
  return gamma * epsilon;
}

module.exports = { getDiagnostics, part1 };
