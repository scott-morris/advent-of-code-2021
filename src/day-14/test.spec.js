// Functions to Test
const parseInput = require('./parse-input.js');
const { performSteps, part1 } = require('./part1.js');
const { part2, splitTemplate } = require('./part2.js');

// Test Input
const input = [
  'NNCB',
  '',
  'CH -> B',
  'HH -> N',
  'CB -> H',
  'NH -> C',
  'HB -> C',
  'HC -> B',
  'HN -> C',
  'NN -> C',
  'BH -> H',
  'NC -> B',
  'NB -> B',
  'BN -> B',
  'BB -> N',
  'BC -> B',
  'CC -> N',
  'CN -> C',
];
const parsedInput = {
  template: 'NNCB',
  rules: [
    { pair: 'CH', insert: 'B' },
    { pair: 'HH', insert: 'N' },
    { pair: 'CB', insert: 'H' },
    { pair: 'NH', insert: 'C' },
    { pair: 'HB', insert: 'C' },
    { pair: 'HC', insert: 'B' },
    { pair: 'HN', insert: 'C' },
    { pair: 'NN', insert: 'C' },
    { pair: 'BH', insert: 'H' },
    { pair: 'NC', insert: 'B' },
    { pair: 'NB', insert: 'B' },
    { pair: 'BN', insert: 'B' },
    { pair: 'BB', insert: 'N' },
    { pair: 'BC', insert: 'B' },
    { pair: 'CC', insert: 'N' },
    { pair: 'CN', insert: 'C' },
  ],
};

// Test Specs

describe('day14-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day14-part1: ', () => {
  describe('performSteps()', () => {
    test('after 1 step, it should match example', () => {
      expect(performSteps(parsedInput, 1)).toBe('NCNBCHB');
    });

    test('after 2 steps, it should match example', () => {
      expect(performSteps(parsedInput, 2)).toBe('NBCCNBBBCBHCB');
    });

    test('after 3 steps, it should match example', () => {
      expect(performSteps(parsedInput, 3)).toBe('NBBBCNCCNBBNBNBBCHBHHBCHB');
    });

    test('after 4 steps, it should match example', () => {
      expect(performSteps(parsedInput, 4)).toBe(
        'NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB'
      );
    });

    test('after more steps, it should match the given lengths', () => {
      expect(performSteps(parsedInput, 5).length).toBe(97);
      expect(performSteps(parsedInput, 10).length).toBe(3073);
    });
  });

  test('processing sample data should equal 1588', () => {
    expect(part1(parsedInput)).toEqual(1588);
  });
});

describe('day14-part2: ', () => {
  describe('splitTemplate()', () => {
    test(`it should split the string on the first pair that doesn't appear in the rules`, () => {
      expect(splitTemplate({ template: 'NCNBCHB', rules: parsedInput.rules).toEqual(['', '']);
    });
  });

  test('processing sample data should equal 2188189693529', () => {
    expect(part1(parsedInput, 40)).toEqual(2188189693529);
  });
});
