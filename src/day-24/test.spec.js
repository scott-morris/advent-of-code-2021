// Functions to Test
const parseInput = require('./parse-input.js');
const {
  processInstructions,
  // isValidModelNumber,
  // part1,
} = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  'inp w',
  'add z w',
  'mod z 2',
  'div w 2',
  'add y w',
  'mod y 2',
  'div w 2',
  'add x w',
  'mod x 2',
  'div w 2',
  'mod w 2',
];

const parsedInput = [
  ['inp', 'w'],
  ['add', 'z', 'w'],
  ['mod', 'z', 2],
  ['div', 'w', 2],
  ['add', 'y', 'w'],
  ['mod', 'y', 2],
  ['div', 'w', 2],
  ['add', 'x', 'w'],
  ['mod', 'x', 2],
  ['div', 'w', 2],
  ['mod', 'w', 2],
];

const exampleProgram1 = [
  ['inp', 'x'],
  ['mul', 'x', -1],
];

const exampleProgram2 = [
  ['inp', 'z'],
  ['inp', 'x'],
  ['mul', 'z', 3],
  ['eql', 'z', 'x'],
];

// Test Specs

describe('day24-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day24-part1: ', () => {
  describe('processInstructions()', () => {
    test.each([
      [3, -3],
      [-4, 4],
    ])('the first example program given %i should set x to %i', (i, o) => {
      const program = processInstructions(exampleProgram1);
      expect(program([i])).toEqual({
        w: 0,
        x: o,
        y: 0,
        z: 0,
      });
    });

    test.each([
      { i1: 2, i2: 6, res: 1 },
      { i1: 2, i2: 9, res: 0 },
      { i1: 3, i2: 9, res: 1 },
    ])(
      'the second example program given [$i1, $i2] should set z to $res and x to $i2',
      ({ i1, i2, res }) => {
        const program = processInstructions(exampleProgram2);
        expect(program([i1, i2])).toEqual({
          w: 0,
          x: i2,
          y: 0,
          z: res,
        });
      }
    );

    test.each([
      { i: 4, w: 0, x: 1, y: 0, z: 0 },
      { i: 7, w: 0, x: 1, y: 1, z: 1 },
      { i: 9, w: 1, x: 0, y: 0, z: 1 },
    ])(
      'the third example program given $i should set { w: $w, x: $x, y: $y, z: $z }',
      ({ i, w, x, y, z }) => {
        const program = processInstructions(parsedInput);
        expect(program([i])).toEqual({ w, x, y, z });
      }
    );
  });

  // test('processing sample data should equal 13579246899999', () => {
  //   expect(part1(parsedInput)).toEqual(13579246899999);
  // });
});

describe.skip('day24-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
