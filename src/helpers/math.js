// Dependencies

const memoize = require('./memoize');

// Private

// eslint-disable-next-line no-underscore-dangle, no-use-before-define
const _factorial = memoize(factorial);

// Public

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

function factorial(number) {
  return number === 0 ? number : number + _factorial(number - 1);
}

function mean(arr) {
  return sum(arr) / arr.length;
}

function median(arr) {
  const numbers = [...arr];
  const len = numbers.length;
  numbers.sort();
  return len % 2 === 0
    ? (numbers[len / 2 - 1] + numbers[len / 2]) / 2 // average of the two middle numbers
    : numbers[(len - 1) / 2]; // the middle number only
}

function mode(arr) {
  const modes = [];
  const count = {};
  let maxIndex = 0;

  arr.forEach((number) => {
    count[number] = (count?.[number] ?? 0) + 1;
    maxIndex = Math.max(maxIndex, count[number]);
  });

  Object.keys(count).forEach((key) => {
    if (count[key] === maxIndex) {
      modes.push(Number(key));
    }
  });

  return modes;
}

function round(number, places = 0) {
  return places === 0
    ? parseInt(number, 10)
    : parseFloat(number.toFixed(places));
}

const stdDev = (arr, usePopulation = false) => {
  const meanValue = mean(arr);
  return Math.sqrt(
    arr
      .reduce((acc, val) => acc.concat((val - meanValue) ** 2), [])
      .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

function transpose(arr) {
  const output = [];

  arr.forEach((row) =>
    row.forEach((item, idx) => {
      output[idx] = [...(output?.[idx] ?? []), item];
      return output;
    })
  );

  return output;
}

module.exports = {
  average: mean,
  factorial,
  mean,
  median,
  mode,
  round,
  stdDev,
  sum,
  transpose,
};
