// Functions to Test
const {
  removeCorruptedLines,
  findIllegalCharacter,
  part1,
} = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  '[({(<(())[]>[[{[]{<()<>>',
  '[(()[<>])]({[<{<<[]>>(',
  '{([(<{}[<>[]}>{[]{[(<()>',
  '(((({<>}<{<{<>}{[]{[]{}',
  '[[<[([]))<([[{}[[()]]]',
  '[{[{({}]{}}([{[{{{}}([]',
  '{<[[]]>}<{[{[{[]{()[[[]',
  '[<(<(<(<{}))><([]([]()',
  '<{([([[(<>()){}]>(<<{{',
  '<{([{{}}[<[[[<>{}]]]>[]]',
];

// Test Specs

describe('day10-part1: ', () => {
  test('it should correctly identify corrupted lines', () => {
    expect(removeCorruptedLines(input)).toEqual([
      '{([(<{}[<>[]}>{[]{[(<()>',
      '[[<[([]))<([[{}[[()]]]',
      '[{[{({}]{}}([{[{{{}}([]',
      '[<(<(<(<{}))><([]([]()',
      '<{([([[(<>()){}]>(<<{{',
    ]);
  });

  test('it should correctly find the first illegal character', () => {
    expect(findIllegalCharacter('{([(<{}[<>[]}>{[]{[(<()>')).toEqual('}');
    expect(findIllegalCharacter('[[<[([]))<([[{}[[()]]]')).toEqual(')');
    expect(findIllegalCharacter('[{[{({}]{}}([{[{{{}}([]')).toEqual(']');
    expect(findIllegalCharacter('[<(<(<(<{}))><([]([]()')).toEqual(')');
    expect(findIllegalCharacter('<{([([[(<>()){}]>(<<{{')).toEqual('>');
  });

  test('processing sample data should equal 26397', () => {
    expect(part1(input)).toEqual(26397);
  });
});

// describe('day10-part2: ', () => {
//   test('processing sample data should equal 99999', () => {
//     expect(part2(input)).toEqual(99999);
//   });
// });
