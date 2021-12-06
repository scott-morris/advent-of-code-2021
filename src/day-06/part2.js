// Shift off the zero day timers, adding them back in at 6 days AND at
// 8 days to simulate the spawning
function simulateDay(school) {
  const newDay = [...school];
  const spawning = newDay.shift();
  newDay[6] += spawning;
  newDay[8] = spawning;

  return newDay;
}

// Instead of maintaining an array with all of the specific values, just maintain
// a list of the number of fish at a particular timer value. The order doesn't matter.
// We can even use the array index to indicate the timer value.
function sortFish(input) {
  return input.reduce((counts, timer) => {
    // eslint-disable-next-line no-param-reassign
    counts[timer] += 1;
    return counts;
  }, new Array(9).fill(0));
}

// Getting to 256 days was causing my machine to run out of memory. We need a new simulation.
function simulateDays(input, days) {
  let school = sortFish(input);
  for (let i = 0; i < days; i += 1) {
    school = simulateDay(school);
  }

  return school.reduce((count, timerCount) => count + timerCount, 0);
}

// Public

function part2(input, days = 256) {
  return simulateDays(input, days);
}

module.exports = { part2 };
