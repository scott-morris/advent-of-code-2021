// Functions to Test
const parseInput = require('./parse-input.js');
const { drawStraightPath, part1 } = require('./part1.js');
const { drawPath, part2 } = require('./part2.js');

// Test Input
const input = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
];

const parsedInput = [
  { source: { x: 0, y: 9 }, dest: { x: 5, y: 9 } },
  { source: { x: 8, y: 0 }, dest: { x: 0, y: 8 } },
  { source: { x: 9, y: 4 }, dest: { x: 3, y: 4 } },
  { source: { x: 2, y: 2 }, dest: { x: 2, y: 1 } },
  { source: { x: 7, y: 0 }, dest: { x: 7, y: 4 } },
  { source: { x: 6, y: 4 }, dest: { x: 2, y: 0 } },
  { source: { x: 0, y: 9 }, dest: { x: 2, y: 9 } },
  { source: { x: 3, y: 4 }, dest: { x: 1, y: 4 } },
  { source: { x: 0, y: 0 }, dest: { x: 8, y: 8 } },
  { source: { x: 5, y: 5 }, dest: { x: 8, y: 2 } },
];

// Test Specs

describe('day05-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day05-part1: ', () => {
  test('it should draw the straight path correctly with all nodes', () => {
    expect(drawStraightPath(parsedInput[0])).toEqual([
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
    ]);
  });

  test('processing sample data should equal 5', () => {
    expect(part1(parsedInput)).toEqual(5);
  });
});

describe('day05-part2: ', () => {
  test('it should draw the straight path correctly with all nodes', () => {
    expect(drawPath(parsedInput[0])).toEqual([
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
    ]);
  });

  test('it should draw the diagonal path correctly with all nodes', () => {
    expect(drawPath({ source: { x: 1, y: 1 }, dest: { x: 3, y: 3 } })).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
  });

  test('processing sample data should equal 12', () => {
    expect(part2(parsedInput)).toEqual(12);
  });
});
