// Functions to Test
const parseInput = require('./parse-input.js');
const { countUniqueDigits, part1 } = require('./part1.js');
const { mapSignals, translateOutput, part2 } = require('./part2.js');

// Test Input
const input = [
  'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
  'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
  'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
  'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
  'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea',
  'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb',
  'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe',
  'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef',
  'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb',
  'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce',
];
const parsedInput = [
  {
    signal: [
      'be',
      'cfbegad',
      'cbdgef',
      'fgaecd',
      'cgeb',
      'fdcge',
      'agebfd',
      'fecdb',
      'fabcd',
      'edb',
    ],
    output: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'],
  },
  {
    signal: [
      'edbfga',
      'begcd',
      'cbg',
      'gc',
      'gcadebf',
      'fbgde',
      'acbgfd',
      'abcde',
      'gfcbed',
      'gfec',
    ],
    output: ['fcgedb', 'cgb', 'dgebacf', 'gc'],
  },
  {
    signal: [
      'fgaebd',
      'cg',
      'bdaec',
      'gdafb',
      'agbcfd',
      'gdcbef',
      'bgcad',
      'gfac',
      'gcb',
      'cdgabef',
    ],
    output: ['cg', 'cg', 'fdcagb', 'cbg'],
  },
  {
    signal: [
      'fbegcd',
      'cbd',
      'adcefb',
      'dageb',
      'afcb',
      'bc',
      'aefdc',
      'ecdab',
      'fgdeca',
      'fcdbega',
    ],
    output: ['efabcd', 'cedba', 'gadfec', 'cb'],
  },
  {
    signal: [
      'aecbfdg',
      'fbg',
      'gf',
      'bafeg',
      'dbefa',
      'fcge',
      'gcbea',
      'fcaegb',
      'dgceab',
      'fcbdga',
    ],
    output: ['gecf', 'egdcabf', 'bgf', 'bfgea'],
  },
  {
    signal: [
      'fgeab',
      'ca',
      'afcebg',
      'bdacfeg',
      'cfaedg',
      'gcfdb',
      'baec',
      'bfadeg',
      'bafgc',
      'acf',
    ],
    output: ['gebdcfa', 'ecba', 'ca', 'fadegcb'],
  },
  {
    signal: [
      'dbcfg',
      'fgd',
      'bdegcaf',
      'fgec',
      'aegbdf',
      'ecdfab',
      'fbedc',
      'dacgb',
      'gdcebf',
      'gf',
    ],
    output: ['cefg', 'dcbef', 'fcge', 'gbcadfe'],
  },
  {
    signal: [
      'bdfegc',
      'cbegaf',
      'gecbf',
      'dfcage',
      'bdacg',
      'ed',
      'bedf',
      'ced',
      'adcbefg',
      'gebcd',
    ],
    output: ['ed', 'bcgafe', 'cdgba', 'cbgef'],
  },
  {
    signal: [
      'egadfb',
      'cdbfeg',
      'cegd',
      'fecab',
      'cgb',
      'gbdefca',
      'cg',
      'fgcdab',
      'egfdb',
      'bfceg',
    ],
    output: ['gbdfcae', 'bgc', 'cg', 'cgb'],
  },
  {
    signal: [
      'gcafb',
      'gcf',
      'dcaebfg',
      'ecagb',
      'gf',
      'abcdeg',
      'gaef',
      'cafbge',
      'fdbac',
      'fegbdc',
    ],
    output: ['fgae', 'cfgab', 'fg', 'bagce'],
  },
];

// Test Specs

describe('day08-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day08-part1: ', () => {
  test('it should count unique digits correctly', () => {
    expect(countUniqueDigits(parsedInput[0])).toEqual(2);
    expect(countUniqueDigits(parsedInput[1])).toEqual(3);
  });

  test('processing sample data should equal 26', () => {
    expect(part1(parsedInput)).toEqual(26);
  });
});

describe('day08-part2: ', () => {
  const example = {
    signal: [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ],
    output: ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'],
  };

  test('it should identify the correct configuration', () => {
    expect(mapSignals(example)).toEqual({
      a: 0b0000100,
      b: 0b0100000,
      c: 0b1000000,
      d: 0b0000001,
      e: 0b0000010,
      f: 0b0001000,
      g: 0b0010000,
    });
  });

  test('it should translate the output based on the signal', () => {
    expect(translateOutput(example)).toEqual(5353);
  });

  test('processing sample data should equal 61229', () => {
    expect(part2(parsedInput)).toEqual(61229);
  });
});
