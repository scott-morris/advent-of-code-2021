// Public

function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    // eslint-disable-next-line no-prototype-builtins
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

module.exports = memoize;
