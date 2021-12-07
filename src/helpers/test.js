// Dependencies

const { transpose } = require('./math');

// Tests

describe('math.js: ', () => {
  describe('transpose', () => {
    test('it should transpose a 2-dimensional array', () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expectedOutput = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ];

      expect(transpose(input)).toEqual(expectedOutput);
    });
  });
});
