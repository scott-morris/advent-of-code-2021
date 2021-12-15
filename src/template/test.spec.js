// Functions to Test
const parseInput = require('./parse-input.js');
const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [];
const parsedInput = [];

// Test Specs

describe('day##-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day##-part1: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part1(parsedInput)).toEqual(99999);
  });
});

describe.skip('day##-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
