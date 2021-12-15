// Dependencies

const MapArray = require('../helpers/map-array');

// Functions to Test
const parseInput = require('./parse-input.js');
const { createPaths, part1, allPossibilities } = require('./part1.js');
const { possiblePaths, part2 } = require('./part2.js');

// Test Input
const example1 = ['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'];

const example2 = [
  'dc-end',
  'HN-start',
  'start-kj',
  'dc-start',
  'dc-HN',
  'LN-dc',
  'HN-end',
  'kj-sa',
  'kj-HN',
  'kj-dc',
];

const example3 = [
  'fs-end',
  'he-DX',
  'fs-he',
  'start-DX',
  'pj-DX',
  'end-zg',
  'zg-sl',
  'zg-pj',
  'pj-he',
  'RW-he',
  'fs-DX',
  'pj-RW',
  'zg-RW',
  'start-pj',
  'he-WI',
  'zg-he',
  'pj-fs',
  'start-RW',
];

const parsedInput = [
  ['start', 'A'],
  ['start', 'b'],
  ['A', 'c'],
  ['A', 'b'],
  ['b', 'd'],
  ['A', 'end'],
  ['b', 'end'],
];

// Test Specs

describe('day12-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(example1)).toEqual(parsedInput);
  });
});

describe('day12-part1: ', () => {
  describe('createPaths', () => {
    const paths = createPaths(parsedInput);

    test('it should return a MapArray', () => {
      expect(paths).toBeInstanceOf(MapArray);
    });

    test('it should have paths established both ways', () => {
      expect(Array.from(paths.entries())).toEqual([
        ['start', new Set(['A', 'b'])],
        ['A', new Set(['start', 'b', 'c', 'end'])],
        ['b', new Set(['start', 'A', 'd', 'end'])],
        ['c', new Set(['A'])],
        ['d', new Set(['b'])],
        ['end', new Set(['A', 'b'])],
      ]);
    });
  });

  describe('allPossibilities', () => {
    const paths = createPaths([
      ['start', 'A'],
      ['start', 'b'],
      ['b', 'A'],
      ['b', 'end'],
      ['A', 'end'],
    ]);

    test('it should return the possible paths', () => {
      const possibilities = allPossibilities(paths, 'start', 'end');
      expect(possibilities).toEqual([
        ['start', 'A', 'b', 'A', 'end'],
        ['start', 'A', 'b', 'end'],
        ['start', 'A', 'end'],
        ['start', 'b', 'A', 'end'],
        ['start', 'b', 'end'],
      ]);
    });
  });

  describe('possiblePaths', () => {
    const paths = createPaths(parsedInput);
    const possibilities = possiblePaths(paths, 'start', 'end');
    const expectations = [
      'start,A,b,A,b,A,c,A,end',
      'start,A,b,A,b,A,end',
      'start,A,b,A,b,end',
      'start,A,b,A,c,A,b,A,end',
      'start,A,b,A,c,A,b,end',
      'start,A,b,A,c,A,c,A,end',
      'start,A,b,A,c,A,end',
      'start,A,b,A,end',
      'start,A,b,d,b,A,c,A,end',
      'start,A,b,d,b,A,end',
      'start,A,b,d,b,end',
      'start,A,b,end',
      'start,A,c,A,b,A,b,A,end',
      'start,A,c,A,b,A,b,end',
      'start,A,c,A,b,A,c,A,end',
      'start,A,c,A,b,A,end',
      'start,A,c,A,b,d,b,A,end',
      'start,A,c,A,b,d,b,end',
      'start,A,c,A,b,end',
      'start,A,c,A,c,A,b,A,end',
      'start,A,c,A,c,A,b,end',
      'start,A,c,A,c,A,end',
      'start,A,c,A,end',
      'start,A,end',
      'start,b,A,b,A,c,A,end',
      'start,b,A,b,A,end',
      'start,b,A,b,end',
      'start,b,A,c,A,b,A,end',
      'start,b,A,c,A,b,end',
      'start,b,A,c,A,c,A,end',
      'start,b,A,c,A,end',
      'start,b,A,end',
      'start,b,d,b,A,c,A,end',
      'start,b,d,b,A,end',
      'start,b,d,b,end',
      'start,b,end',
    ];

    test.each(possibilities)('expectations should include %s', (str) => {
      expect(expectations.includes(str)).toBe(true);
    });

    test.each(expectations)('possibilities should include %s', (str) => {
      expect(possibilities.includes(str)).toBe(true);
    });
  });

  test('processing first sample data should equal 10', () => {
    expect(part1(parseInput(example1))).toEqual(10);
  });

  test('processing second sample data should equal 19', () => {
    expect(part1(parseInput(example2))).toEqual(19);
  });

  test('processing third sample data should equal 226', () => {
    expect(part1(parseInput(example3))).toEqual(226);
  });
});

describe('day12-part2: ', () => {
  test('processing sample data should equal 36', () => {
    expect(part2(parseInput(example1))).toEqual(36);
  });

  test('processing second sample data should equal 103', () => {
    expect(part2(parseInput(example2))).toEqual(103);
  });

  test('processing third sample data should equal 3509', () => {
    expect(part2(parseInput(example3))).toEqual(3509);
  });
});
