// Libraries

const path = require('path');

// Public

/**
 * Get the input file name for the given day.
 * @param {Number} dayNumber the number of the day to get the input file for
 * @returns {String} the path to the input file
 */
function getInputFile(dayNumber) {
  const paddedNumber = dayNumber.toString().padStart(2, '0').slice(-2);

  // TODO: check for existence of file. If it does not exist, provide a user-friendly error message.

  return path.resolve(__dirname, `../../data/input-${paddedNumber}.data`);
}

module.exports = getInputFile;
