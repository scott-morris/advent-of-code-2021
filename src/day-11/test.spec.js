// Functions to Test
const { Grid, getFlashesOverTime, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = [
  '5483143223',
  '2745854711',
  '5264556173',
  '6141336146',
  '6357385478',
  '4167524645',
  '2176841721',
  '6882881134',
  '4846848554',
  '5283751526',
];

const exampleData = ['11111', '19991', '19191', '19991', '11111'];

// Test Specs

describe('day11-part1: ', () => {
  test('processing small example over 3 days should equal 9', () => {
    expect(getFlashesOverTime(exampleData, 1)).toEqual(9);
    // expect(getFlashesOverTime(exampleData, 2)).toEqual(9);
  });

  test('processing sample data should equal 1656', () => {
    // expect(part1(input)).toEqual(1656);
  });
});

// describe('day11-part2: ', () => {
//   test('processing sample data should equal 99999', () => {
//     expect(part2(input)).toEqual(99999);
//   });
// });
