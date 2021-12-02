// Libraries

// Dependencies

const { run1, run2 } = require('./index.js');

// Private
const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

// Tests

test('D01-1: processing sample data should equal 7', async () => {
  expect(await run1(input)).toEqual(7);
});

test('D01-2: processing sample data should equal 5', async () => {
  expect(await run2(input)).toEqual(5);
});
