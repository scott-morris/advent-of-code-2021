// Functions to Test
const parseInput = require('./parse-input.js');
const { travel, lands, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = 'target area: x=20..30, y=-10..-5';
const parsedInput = { x: [20, 30], y: [-10, -5] };

// Test Specs

describe('day17-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day17-part1: ', () => {
  describe('travels()', () => {
    test('traveling one step should follow given rules', () => {
      expect(travel([0, 0], [7, 2])).toEqual({
        coords: [7, 2],
        velocity: [6, 1],
      });

      expect(travel([7, 2], [6, 1])).toEqual({
        coords: [13, 3],
        velocity: [5, 0],
      });
    });
  });

  describe('lands()', () => {
    test('given examples should land', () => {
      expect(lands([7, 2], parsedInput).adjustment).toBe(0);
      expect(lands([6, 3], parsedInput).adjustment).toBe(0);
      expect(lands([9, 0], parsedInput).adjustment).toBe(0);
    });

    test('given examples should not land', () => {
      expect(lands([17, -4], parsedInput).adjustment).toBe(-1);
    });
  });

  test('processing sample data should equal 45', () => {
    expect(part1(parsedInput, 10)).toEqual(45);
  });
});

describe('day17-part2: ', () => {
  test('processing sample data should equal 112', () => {
    expect(part2(parsedInput)).toEqual(112);
  });
});
