// Functions to Test
const {
  getCorruptedLines,
  findIllegalCharacter,
  part1,
} = require('./part1.js');
const {
  getCompletionString,
  scoreCompletionString,
  removeCorruptedLines,
  part2,
} = require('./part2.js');

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
    expect(getCorruptedLines(input)).toEqual([
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

describe('day10-part2: ', () => {
  test('it should correctly identify incomplete lines', () => {
    expect(removeCorruptedLines(input)).toEqual([
      '[({(<(())[]>[[{[]{<()<>>',
      '[(()[<>])]({[<{<<[]>>(',
      '(((({<>}<{<{<>}{[]{[]{}',
      '{<[[]]>}<{[{[{[]{()[[[]',
      '<{([{{}}[<[[[<>{}]]]>[]]',
    ]);
  });

  test('it should generate the completion strings correctly', () => {
    expect(getCompletionString('[({(<(())[]>[[{[]{<()<>>')).toEqual('}}]])})]');
    expect(getCompletionString('[(()[<>])]({[<{<<[]>>(')).toEqual(')}>]})');
    expect(getCompletionString('(((({<>}<{<{<>}{[]{[]{}')).toEqual('}}>}>))))');
    expect(getCompletionString('{<[[]]>}<{[{[{[]{()[[[]')).toEqual(']]}}]}]}>');
    expect(getCompletionString('<{([{{}}[<[[[<>{}]]]>[]]')).toEqual('])}>');
  });

  test('it should score completion strings correctly', () => {
    expect(scoreCompletionString('}}]])})]')).toEqual(288957);
    expect(scoreCompletionString(')}>]})')).toEqual(5566);
    expect(scoreCompletionString('}}>}>))))')).toEqual(1480781);
    expect(scoreCompletionString(']]}}]}]}>')).toEqual(995444);
    expect(scoreCompletionString('])}>')).toEqual(294);
  });

  test('processing sample data should equal 288957', () => {
    expect(part2(input)).toEqual(288957);
  });
});
