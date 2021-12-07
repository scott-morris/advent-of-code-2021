// Functions to Test
const parseInput = require('./parse-input.js');
const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

// Test Specs

describe('day07-part1: ', () => {
  test('processing sample data should equal 37', () => {
    expect(part1(input)).toEqual(37);
  });
});

// describe('day07-part2: ', () => {
//   test('processing sample data should equal...', () => {
//     expect(part2(input)).toEqual(undefined);
//   });
// });
