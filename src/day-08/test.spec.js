// Functions to Test
const parseInput = require('./parse-input.js');
const { countUniqueDigits, part1 } = require('./part1.js');
const { Digit, translateOutput, part2 } = require('./part2.js');

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

  describe('when not given a known signal pattern', () => {
    let digit;

    beforeEach(() => {
      digit = new Digit();
    });

    test('it should start with all signals potentially matching any position', () => {
      expect(digit.map).toEqual({
        a: 0b1111111,
        b: 0b1111111,
        c: 0b1111111,
        d: 0b1111111,
        e: 0b1111111,
        f: 0b1111111,
        g: 0b1111111,
      });
    });

    test('it should narrow down when given 2 letters', () => {
      digit.processSignal('ab');
      expect(digit.map).toEqual({
        a: 0b0100100,
        b: 0b0100100,
        c: 0b1011011,
        d: 0b1011011,
        e: 0b1011011,
        f: 0b1011011,
        g: 0b1011011,
      });
    });

    test('it should narrow down when given 3 letters', () => {
      digit.processSignal('dab');
      expect(digit.map).toEqual({
        a: 0b0100101,
        b: 0b0100101,
        c: 0b1011010,
        d: 0b0100101,
        e: 0b1011010,
        f: 0b1011010,
        g: 0b1011010,
      });
    });

    test('it should narrow down when given 4 letters', () => {
      digit.processSignal('eafb');
      expect(digit.map).toEqual({
        a: 0b0101110,
        b: 0b0101110,
        c: 0b1010001,
        d: 0b1010001,
        e: 0b0101110,
        f: 0b0101110,
        g: 0b1010001,
      });
    });

    test('it should not narrow down when given 5, 6 or 7 letters', () => {
      digit.processSignal('acedgfb');
      digit.processSignal('cagedb');
      digit.processSignal('cdfbe');
      expect(digit.map).toEqual({
        a: 0b1111111,
        b: 0b1111111,
        c: 0b1111111,
        d: 0b1111111,
        e: 0b1111111,
        f: 0b1111111,
        g: 0b1111111,
      });
    });

    test('it should narrow down with multiple passes', () => {
      digit.processSignals(
        ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab'],
        false
      );

      // apply 3 character mask: 0b0100101
      expect(digit.map).toEqual({
        a: 0b0100101,
        b: 0b0100101,
        c: 0b1011010,
        d: 0b0100101,
        e: 0b1011010,
        f: 0b1011010,
        g: 0b1011010,
      });

      digit.processSignals(['cefabd', 'cdfgeb', 'eafb'], false);

      // apply 4 character mask: 0b0101110
      expect(digit.map).toEqual({
        a: 0b0100100,
        b: 0b0100100,
        c: 0b1010000,
        d: 0b0000001,
        e: 0b0001010,
        f: 0b0001010,
        g: 0b1010000,
      });

      digit.processSignals(['cagedb', 'ab'], false);
      // apply 2 character mask: 0b0100100
      expect(digit.map).toEqual({
        a: 0b0100100,
        b: 0b0100100,
        c: 0b1010000,
        d: 0b0000001,
        e: 0b0001010,
        f: 0b0001010,
        g: 0b1010000,
      });
    });

    test('it should identify the correct configuration', () => {
      digit.processSignals([...example.signal, ...example.output]);

      expect(digit.map).toEqual({
        a: 0b0000100,
        b: 0b0100000,
        c: 0b1000000,
        d: 0b0000001,
        e: 0b0000010,
        f: 0b0001000,
        g: 0b0010000,
      });
    });
  });

  describe('when given a known signal pattern', () => {
    let knownDigit;

    beforeEach(() => {
      knownDigit = new Digit({
        a: 0b0000100,
        b: 0b0100000,
        c: 0b1000000,
        d: 0b0000001,
        e: 0b0000010,
        f: 0b0001000,
        g: 0b0010000,
      });
    });

    test('it should translate be created as expected', () => {
      expect(knownDigit.map).toEqual({
        a: 0b0000100,
        b: 0b0100000,
        c: 0b1000000,
        d: 0b0000001,
        e: 0b0000010,
        f: 0b0001000,
        g: 0b0010000,
      });
    });

    test('it should translate a digit based on the signal', () => {
      expect(knownDigit.translateDigit('acedgfb')).toEqual(8);
      expect(knownDigit.translateDigit('cdfbe')).toEqual(5);
      expect(knownDigit.translateDigit('gcdfa')).toEqual(2);
      expect(knownDigit.translateDigit('fbcad')).toEqual(3);
      expect(knownDigit.translateDigit('dab')).toEqual(7);
      expect(knownDigit.translateDigit('cefabd')).toEqual(9);
      expect(knownDigit.translateDigit('cdfgeb')).toEqual(6);
      expect(knownDigit.translateDigit('eafb')).toEqual(4);
      expect(knownDigit.translateDigit('cagedb', true)).toEqual('1110111');
      expect(knownDigit.translateDigit('cagedb')).toEqual(0);
      expect(knownDigit.translateDigit('ab')).toEqual(1);
    });

    test('it should translate the output based on the signal', () => {
      expect(knownDigit.translate(example.output)).toEqual(5353);
    });
  });

  test('processing sample data should equal 61229', () => {
    expect(part2(parsedInput)).toEqual(61229);
  });
});
