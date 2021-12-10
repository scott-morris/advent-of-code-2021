// Functions to Test
const { cost: cost1, calculateCost: total1, part1 } = require('./part1.js');
const { cost: cost2, calculateCost: total2, part2 } = require('./part2.js');

// Test Input
const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

// Test Specs

describe('day07-part1: ', () => {
  test('cost should calculate according to spec', () => {
    expect(cost1(0, 2)).toEqual(2);
    expect(cost1(1, 2)).toEqual(1);
    expect(cost1(2, 2)).toEqual(0);
    expect(cost1(4, 2)).toEqual(2);
    expect(cost1(7, 2)).toEqual(5);
    expect(cost1(14, 2)).toEqual(12);
    expect(cost1(16, 2)).toEqual(14);
  });

  test('overall cost should calculate according to spec', () => {
    expect(total1(input, 1)).toEqual(41);
    expect(total1(input, 3)).toEqual(39);
    expect(total1(input, 10)).toEqual(71);
  });

  test('processing sample data should equal 37', () => {
    expect(part1(input)).toEqual(37);
  });
});

describe('day07-part2: ', () => {
  test('cost should calculate according to spec', () => {
    expect(cost2(0, 5)).toEqual(15);
    expect(cost2(1, 5)).toEqual(10);
    expect(cost2(2, 5)).toEqual(6);
    expect(cost2(4, 5)).toEqual(1);
    expect(cost2(7, 5)).toEqual(3);
    expect(cost2(14, 5)).toEqual(45);
    expect(cost2(16, 5)).toEqual(66);
  });

  test('overall cost should calculate according to spec', () => {
    expect(total2(input, 2)).toEqual(206);
  });

  test('processing sample data should equal 168', () => {
    expect(part2(input)).toEqual(168);
  });
});
