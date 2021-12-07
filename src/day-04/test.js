// Functions to Test
const parseInput = require('./parse-input.js');
const transposeArray = require('./transpose-array.js');
const { part1 } = require('./part1.js');
const { runSimulation: runSimulation2, part2 } = require('./part2.js');

// Test Input
const input = [
  '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
  '',
  '22 13 17 11  0',
  ' 8  2 23  4 24',
  '21  9 14 16  7',
  ' 6 10  3 18  5',
  ' 1 12 20 15 19',
  '',
  ' 3 15  0  2 22',
  ' 9 18 13 17  5',
  '19  8  7 25 23',
  '20 11 10 24  4',
  '14 21 16 12  6',
  '',
  '14 21 17 24  4',
  '10 16 15  9 19',
  '18  8 23 26 20',
  '22 11 13  6  5',
  ' 2  0 12  3  7',
];

const parsedInput = {
  pulls: [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ],
  cards: [
    [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ],
    [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
  ],
};

// Test Specs

describe('day04-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day04-part1: ', () => {
  test('processing sample data should equal 4512', () => {
    expect(part1(parsedInput)).toEqual(4512);
  });
});

describe('day04-part2: ', () => {
  const { losingCard, losingCardScore, losingNumber } =
    runSimulation2(parsedInput);

  test('the losing card score should be 148', () => {
    expect(losingCardScore).toEqual(148);
  });

  test('the losing number should be 13', () => {
    expect(losingNumber).toEqual(13);
  });

  test('processing sample data should equal 1924', () => {
    expect(part2(parsedInput)).toEqual(1924);
  });
});
