/* eslint-disable max-classes-per-file */
// Dependencies

class Options extends Array {}
class DynamicOptions {
  constructor(fn) {
    this.fn = fn;
  }

  run(...args) {
    return this.fn(...args);
  }
}

// Private

function getArrayPermutations(arr) {
  let index = -1;

  if (
    !arr.some((item, i) => {
      if (item instanceof Options || item instanceof DynamicOptions) {
        index = i;
        return true;
      }
      return false;
    })
  ) {
    return [arr];
  }

  const previousItems = arr.slice(0, index) || [];
  const nextItems = arr.slice(index + 1) || [];

  const permutations = [];

  const options =
    arr[index] instanceof DynamicOptions
      ? arr[index].run(nextItems, previousItems)
      : arr[index];

  options.forEach((item) => {
    const nextPermutations = getArrayPermutations(nextItems);
    permutations.push(
      ...nextPermutations.map((next) => [...previousItems, item, ...next])
    );
  });

  return permutations;
}

function getObjectPermutations(obj) {
  let prop;

  if (
    !Object.keys(obj).some((key) => {
      if (obj[key] instanceof Options || obj[key] instanceof DynamicOptions) {
        prop = key;
        return true;
      }
      return false;
    })
  ) {
    return [obj];
  }

  const { [prop]: opts, ...remainingObj } = obj;

  const permutations = [];

  const optsArray =
    opts instanceof DynamicOptions ? opts.run(remainingObj) : opts;
  const optObjs = optsArray.map((opt) => ({ [prop]: opt }));

  optObjs.forEach((optObj) => {
    const nextPermutations = getObjectPermutations(remainingObj);
    permutations.push(
      ...nextPermutations.map((nextObj) => ({ ...optObj, ...nextObj }))
    );
  });

  return permutations;
}

// Public

function getPermutations(obj, fn) {
  return Array.isArray(obj)
    ? getArrayPermutations(obj, fn)
    : getObjectPermutations(obj, fn);
}

module.exports = { Options, DynamicOptions, getPermutations };
