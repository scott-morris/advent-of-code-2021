// Functions to Test
const parseInput = require('./parse-input.js');
const { generateGrid, fold, countEmpty, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  '0,14',
  '6,10',
  '9,10',
  '0,3',
  '10,4',
  '4,11',
  '6,0',
  '6,12',
  '4,1',
  '0,13',
  '10,12',
  '3,4',
  '3,0',
  '8,4',
  '1,10',
  '2,14',
  '8,10',
  '9,0',
  '',
  'fold along y=7',
  'fold along x=5',
];
const parsedInput = {
  coords: [
    { x: 0, y: 14 },
    { x: 6, y: 10 },
    { x: 9, y: 10 },
    { x: 0, y: 3 },
    { x: 10, y: 4 },
    { x: 4, y: 11 },
    { x: 6, y: 0 },
    { x: 6, y: 12 },
    { x: 4, y: 1 },
    { x: 0, y: 13 },
    { x: 10, y: 12 },
    { x: 3, y: 4 },
    { x: 3, y: 0 },
    { x: 8, y: 4 },
    { x: 1, y: 10 },
    { x: 2, y: 14 },
    { x: 8, y: 10 },
    { x: 9, y: 0 },
  ],
  folds: [
    { axis: 'y', index: 7 },
    { axis: 'x', index: 5 },
  ],
};

// Test Specs

describe('day13-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day13-part1: ', () => {
  describe('generateGrid', () => {});

  describe('fold', () => {});

  describe('countEmpty', () => {});

  test('processing sample data should equal 17', () => {
    expect(part1(parsedInput)).toEqual(17);
  });
});

describe.skip('day13-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
