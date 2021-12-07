// Public

/**
 * Memoize a function so that if it is called more than once with the same parameter
 * values, it will return a cached value instead of re-running the function multiple
 * times. This is ideal for recursive functions or functions that take time and are
 * called many times or require larger amounts of memory.
 * @param {Function} fn the function to memoize
 * @returns {Function} the memoized function
 */
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
