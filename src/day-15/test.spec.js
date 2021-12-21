// Dependencies

const { Matrix } = require('../helpers/matrix');

// Functions to Test
const parseInput = require('./parse-input.js');
const { getLowestRisk, part1 } = require('./part1.js');
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

const parsedInput = new Matrix([
  [1, 1, 6, 3, 7, 5, 1, 7, 4, 2],
  [1, 3, 8, 1, 3, 7, 3, 6, 7, 2],
  [2, 1, 3, 6, 5, 1, 1, 3, 2, 8],
  [3, 6, 9, 4, 9, 3, 1, 5, 6, 9],
  [7, 4, 6, 3, 4, 1, 7, 1, 1, 1],
  [1, 3, 1, 9, 1, 2, 8, 1, 3, 7],
  [1, 3, 5, 9, 9, 1, 2, 4, 2, 1],
  [3, 1, 2, 5, 4, 2, 1, 6, 3, 9],
  [1, 2, 9, 3, 1, 3, 8, 5, 2, 1],
  [2, 3, 1, 1, 9, 4, 4, 5, 8, 1],
]);

// Test Specs

describe('day15-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day15-part1: ', () => {
  describe('getLowestRisk()', () => {
    const result = getLowestRisk(parsedInput);

    test('it should identify risk correctly', () => {
      expect(result.get('0,0')).toBe(0);
      expect(result.get('0,1')).toBe(1);
      expect(result.get('1,0')).toBe(1);
      expect(result.get('0,2')).toBe(3);
      expect(result.get('2,0')).toBe(7);
      expect(result.get('1,2')).toBe(4);
      expect(result.get('2,2')).toBe(7);
      expect(result.get('3,2')).toBe(13);
    });
  });

  test('processing sample data should equal 40', () => {
    expect(part1(parsedInput)).toEqual(40);
  });
});

describe.skip('day15-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
