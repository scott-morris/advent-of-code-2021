// Dependencies

const memoize = require('./memoize');

// Tests

describe('memoize.js:', () => {
  test('when called for the first time, it should call the function', () => {
    const mockFn = jest.fn().mockImplementation((scalar) => scalar * 2);
    const memoizedMock = memoize(mockFn);

    const result = memoizedMock(2);
    expect(result).toEqual(4);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('when called with different parameters, it should call the function each time', () => {
    const mockFn = jest.fn().mockImplementation((scalar) => scalar * 2);
    const memoizedMock = memoize(mockFn);

    const result1 = memoizedMock(2);
    const result2 = memoizedMock(3);

    expect(result1).toEqual(4);
    expect(result2).toEqual(6);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('when called with the same parameters, it should not call the function again but return correctly', () => {
    const mockFn = jest.fn().mockImplementation((scalar) => scalar * 2);
    const memoizedMock = memoize(mockFn);

    const result1 = memoizedMock(2);
    const result2 = memoizedMock(2);

    expect(result1).toEqual(4);
    expect(result2).toEqual(4);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
