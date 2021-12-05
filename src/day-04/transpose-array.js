// Public

function transposeArray(arr) {
  const output = [];

  arr.forEach((row) =>
    row.forEach((item, idx) => (output[idx] = [...(output?.[idx] ?? []), item]))
  );

  return output;
}

module.exports = transposeArray;
