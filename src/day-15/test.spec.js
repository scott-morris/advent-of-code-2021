// Functions to Test
const parseInput = require('./parse-input.js');
const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  '1163751742',
  '1381373672',
  '2136511328',
  '3694931569',
  '7463417111',
  '1319128137',
  '1359912421',
  '3125421639',
  '1293138521',
  '2311944581',
];
const parsedInput = [];

// Test Specs

describe('day15-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day15-part1: ', () => {
  test('processing sample data should equal 40', () => {
    expect(part1(parsedInput)).toEqual(40);
  });
});

describe.skip('day15-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
