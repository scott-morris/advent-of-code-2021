// Functions to Test
const { simulateDays, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [3, 4, 3, 1, 2];

// Test Specs

describe('day06-part1: ', () => {
  test('running sample data for 1 day should match given values', () => {
    expect(simulateDays(input, 1)).toEqual([2, 3, 2, 0, 1]);
  });

  test('running sample data for 2 days should match given values', () => {
    expect(simulateDays(input, 2)).toEqual([1, 2, 1, 6, 0, 8]);
  });

  test('running sample data for 18 days should match given values', () => {
    expect(simulateDays(input, 18)).toEqual([
      6, 0, 6, 4, 5, 6, 0, 1, 1, 2, 6, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 8,
      8,
    ]);
  });

  test('processing sample data for 18 days should equal 26', () => {
    expect(part1(input, 18)).toEqual(26);
  });

  test('processing sample data for 80 days should equal 5934', () => {
    expect(part1(input, 80)).toEqual(5934);
  });
});

describe('day06-part2: ', () => {
  test('processing sample data for 18 days should equal 26', () => {
    expect(part2(input, 18)).toEqual(26);
  });

  test('processing sample data for 80 days should equal 5934', () => {
    expect(part2(input, 80)).toEqual(5934);
  });

  test('processing sample data for 256 days should equal 26984457539', () => {
    expect(part2(input, 256)).toEqual(26984457539);
  });
});
