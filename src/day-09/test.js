// Functions to Test
const parseInput = require('./parse-input.js');
const { getLowPoints, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  '2199943210',
  '3987894921',
  '9856789892',
  '8767896789',
  '9899965678',
];
const parsedInput = [
  [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
  [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
  [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
  [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
  [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
];

// Test Specs

describe('day09-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day09-part1: ', () => {
  test('it should correctly identify the low points', () => {
    expect(getLowPoints(parsedInput)).toEqual([1, 0, 5, 5]);
  });

  test('processing sample data should equal 15', () => {
    expect(part1(parsedInput)).toEqual(15);
  });
});

// describe('day09-part2: ', () => {
//   test('processing sample data should equal...', () => {
//     expect(part2(parsedInput)).toEqual(undefined);
//   });
// });
