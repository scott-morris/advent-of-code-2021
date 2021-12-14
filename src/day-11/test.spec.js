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

describe('Grid class', () => {
  describe('using small example data', () => {
    let grid;
    beforeEach(() => {
      grid = new Grid(exampleData);
    });

    test('it should flash 9 times after one step', () => {
      expect(grid.step()).toBe(9);
    });

    test('it should match example data after one step', () => {
      grid.step();
      expect(grid.data.data).toEqual([
        [3, 4, 5, 4, 3],
        [4, 0, 0, 0, 4],
        [5, 0, 0, 0, 5],
        [4, 0, 0, 0, 4],
        [3, 4, 5, 4, 3],
      ]);
    });
  });
});

describe('day11-part1: ', () => {
  test('processing small example over 2 days should equal 9', () => {
    expect(getFlashesOverTime(exampleData, 1)).toEqual(9);
    expect(getFlashesOverTime(exampleData, 2)).toEqual(9);
  });

  test('processing sample data should equal 1656', () => {
    expect(part1(input)).toEqual(1656);
  });
});

describe('day11-part2: ', () => {
  test('processing sample data should equal 195', () => {
    expect(part2(input)).toEqual(195);
  });
});
