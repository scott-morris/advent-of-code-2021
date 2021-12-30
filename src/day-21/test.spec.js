// Functions to Test
const parseInput = require('./parse-input.js');
const { roll, game, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  'Player 1 starting position: 4',
  'Player 2 starting position: 8',
];
const parsedInput = [4, 8];

// Test Specs

describe('day21-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day21-part1: ', () => {
  describe('roll()', () => {
    test('starting at position 4, it should move to space 10', () => {
      expect(roll(4)).toBe(10);
    });

    test('starting at position 8 and die value 4, it should move to space 3', () => {
      expect(roll(8, 4)).toBe(3);
    });
  });

  describe('game()', () => {
    test('the sample game should end with scores of 1000, 745', () => {
      expect(game(parsedInput)).toEqual({
        players: [
          { position: 10, score: 1000 },
          { position: 3, score: 745 },
        ],
        rolls: 993,
      });
    });
  });

  test('processing sample data should equal 739785', () => {
    expect(part1(parsedInput)).toEqual(739785);
  });
});

describe.skip('day21-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
