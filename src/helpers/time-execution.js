// Libraries

const { JSDOM } = require('jsdom');

// Private

const { window } = new JSDOM();

// Public

function timeExecution(fn) {
  return typeof fn === 'function'
    ? (...args) => {
        const start = window.performance.now();
        const result = fn(...args);
        const stop = window.performance.now();

        return {
          result,
          duration: (stop - start) / 1000,
        };
      }
    : Object.keys(fn).reduce((obj, key) => {
        obj[key] = timeExecution(fn[key]);
        return obj;
      }, {});
}

module.exports = timeExecution;
