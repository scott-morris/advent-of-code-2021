// Functions to Test
const { processData: processData1, part1 } = require('./part1.js');
const { processData: processData2, part2 } = require('./part2.js');

// Test Input
const input = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

// Test Specs

describe('D02-1', () => {
  test('processing sample data have distance of 15 and depth of 10', async () => {
    expect(await processData1(input)).toEqual({ horizontal: 15, depth: 10 });
  });
  test('processing sample data per requirements should equal 150', async () => {
    expect(await part1(input)).toEqual(150);
  });
});

describe('D02-2', () => {
  test('processing sample data have distance of 15, depth of 60, and aim of 10', async () => {
    expect(await processData2(input)).toEqual({
      horizontal: 15,
      depth: 60,
      aim: 10,
    });
  });
  test('processing sample data per requirements should equal 150', async () => {
    expect(await part2(input)).toEqual(900);
  });
});
