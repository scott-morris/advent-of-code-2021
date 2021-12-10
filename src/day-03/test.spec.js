// Functions to Test
const { getDiagnostics, part1 } = require('./part1.js');
const { getOxygen, getCO2, part2 } = require('./part2.js');

// Test Input
const input = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

// Test Specs

describe('day03-part1: ', () => {
  const { gamma, epsilon } = getDiagnostics(input);

  test('gamma rate should be 22', () => {
    expect(gamma).toEqual(22);
  });

  test('epsilon rate should be 9', () => {
    expect(epsilon).toEqual(9);
  });

  test('processing sample data should equal 198', () => {
    expect(part1(input)).toEqual(198);
  });
});

describe('day03-part2: ', () => {
  test('oxygen generator rating should be 23', () => {
    expect(getOxygen(input)).toEqual(23);
  });

  test('co2 scrubber rate should be 10', () => {
    expect(getCO2(input)).toEqual(10);
  });

  test('processing sample data should equal 230', () => {
    expect(part2(input)).toEqual(230);
  });
});
