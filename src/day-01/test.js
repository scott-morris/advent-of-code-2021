// Functions to Test
const { part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

// Test Specs

test('D01-1: processing sample data should equal 7', () => {
  expect(part1(input)).toEqual(7);
});

test('D01-2: processing sample data should equal 5', () => {
  expect(part2(input)).toEqual(5);
});
