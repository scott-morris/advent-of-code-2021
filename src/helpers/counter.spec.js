// Dependencies

const { Counter } = require('./counter');

// Test

describe.only('Class: Counter', () => {
  test('when creating a new Counter, it should have the functions of Map', () => {});

  describe('when given an existing Counter', () => {
    let counter;

    beforeEach(() => {
      counter = new Counter([
        ['a', 10],
        ['b', 100],
        ['c', 1000],
      ]);
    });

    test('increment() should increment just the given key', () => {
      counter.increment('b', 10);
      expect(counter.get('a')).toBe(10);
      expect(counter.get('b')).toBe(110);
      expect(counter.get('c')).toBe(1000);
    });

    test('decrement() should decrement just the given key', () => {
      counter.decrement('b', 10);
      expect(counter.get('a')).toBe(10);
      expect(counter.get('b')).toBe(90);
      expect(counter.get('c')).toBe(1000);
    });
  });
});
