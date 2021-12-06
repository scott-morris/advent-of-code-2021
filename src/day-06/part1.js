// Private

function simulateDay(school) {
  const spawns = [];

  const newSchool = school.map((timer) => {
    if (timer === 0) {
      spawns.push(8);
      return 6;
    }
    return timer - 1;
  });

  return [...newSchool, ...spawns];
}

// Public

function simulateDays(input, days) {
  let school = [...input];
  for (let i = 0; i < days; i += 1) {
    school = simulateDay(school);
  }
  return school;
}

function part1(input, days = 80) {
  return simulateDays(input, days).length;
}

module.exports = { simulateDays, part1 };
