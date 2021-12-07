function stdDev(arr) {
  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

function transpose(arr) {
  const output = [];

  arr.forEach((row) =>
    row.forEach((item, idx) => (output[idx] = [...(output?.[idx] ?? []), item]))
  );

  return output;
}

module.exports = { stdDev, transpose };
