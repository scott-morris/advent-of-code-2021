// Dependencies

const { Options, getPermutations, DynamicOptions } = require('./permutations');

// Tests

describe('getPermutations', () => {
  describe('when given an object', () => {
    test('when there are no permutations, it should return a single item array with the original object', () => {
      const input = {
        foo: 1,
        bar: 'a',
        baz: true,
      };

      const result = getPermutations(input);

      expect(result).toEqual([input]);
      expect(result[0]).toBe(input);
    });

    describe('when there are permutations with regular Options', () => {
      test('it should return an array of objects with the different permutations', () => {
        const input = {
          foo: new Options(1, 2, 3),
          bar: new Options('a', 'b'),
          baz: true,
        };

        const result = getPermutations(input);

        expect(result).toEqual([
          {
            foo: 1,
            bar: 'a',
            baz: true,
          },
          {
            foo: 1,
            bar: 'b',
            baz: true,
          },
          {
            foo: 2,
            bar: 'a',
            baz: true,
          },
          {
            foo: 2,
            bar: 'b',
            baz: true,
          },
          {
            foo: 3,
            bar: 'a',
            baz: true,
          },
          {
            foo: 3,
            bar: 'b',
            baz: true,
          },
        ]);
      });
    });

    describe('when there are permutations with DynamicOptions', () => {
      test('it should return an array of objects with the different permutations', () => {
        const input = {
          foo: new DynamicOptions((obj) => [obj.bar.length, obj.baz.length]),
          bar: ['a', 'b', 'c'],
          baz: [1, 2],
        };

        const result = getPermutations(input);

        expect(result).toEqual([
          { foo: 3, bar: ['a', 'b', 'c'], baz: [1, 2] },
          { foo: 2, bar: ['a', 'b', 'c'], baz: [1, 2] },
        ]);
      });
    });

    describe('when there are permutations with both Options and DynamicOptions', () => {
      test('it should return the array of arrays when they are separate', () => {
        const input = {
          foo: new DynamicOptions((obj) => [obj.bar.length, obj.baz.length]),
          bar: new Options('a', 'b'),
          baz: [1, 2, 3],
        };

        const result = getPermutations(input);

        expect(result).toEqual([
          { foo: 2, bar: 'a', baz: [1, 2, 3] },
          { foo: 2, bar: 'b', baz: [1, 2, 3] },
          { foo: 3, bar: 'a', baz: [1, 2, 3] },
          { foo: 3, bar: 'b', baz: [1, 2, 3] },
        ]);
      });

      test.skip('it should return the array of arrays when they are nested', () => {
        const input = {
          foo: new DynamicOptions(() => [new Options(1, 2), new Options(3, 4)]),
          bar: new Options('a', 'b'),
          baz: [1, 2, 3],
        };

        const result = getPermutations(input);

        // expect(result).toEqual([]);
        expect(result).toEqual([
          { foo: [1, 3], bar: 'a', baz: [1, 2, 3] },
          { foo: [1, 4], bar: 'a', baz: [1, 2, 3] },
          { foo: [2, 3], bar: 'a', baz: [1, 2, 3] },
          { foo: [2, 4], bar: 'a', baz: [1, 2, 3] },
          { foo: [1, 3], bar: 'b', baz: [1, 2, 3] },
          { foo: [1, 4], bar: 'b', baz: [1, 2, 3] },
          { foo: [2, 3], bar: 'b', baz: [1, 2, 3] },
          { foo: [2, 4], bar: 'b', baz: [1, 2, 3] },
        ]);
      });
    });
  });

  describe('when given an array', () => {
    test('when there are no permutations, it should return a single item array containing the original array', () => {
      const input = [1, 'a', true];
      const result = getPermutations(input);

      expect(result).toEqual([input]);
      expect(result[0]).toBe(input);
    });

    describe('when there are permutations with regular Options', () => {
      test('it should return an array of arrays with the different permutations', () => {
        const input = [new Options(1, 2, 3), new Options('a', 'b'), true];
        const result = getPermutations(input);

        expect(result).toEqual([
          [1, 'a', true],
          [1, 'b', true],
          [2, 'a', true],
          [2, 'b', true],
          [3, 'a', true],
          [3, 'b', true],
        ]);
      });
    });

    describe('when there are permutations with DynamicOptions', () => {
      test('it should return an array of arrays with the different permutations', () => {
        const input = [
          1,
          2,
          new DynamicOptions((next, prev) => prev.map((v) => String(v))),
          new DynamicOptions((next) => next.map((v) => v * 10)),
          3,
          4,
        ];
        const result = getPermutations(input);

        expect(result).toEqual([
          [1, 2, '1', 30, 3, 4],
          [1, 2, '1', 40, 3, 4],
          [1, 2, '2', 30, 3, 4],
          [1, 2, '2', 40, 3, 4],
        ]);
      });
    });

    describe('when there are permutations with both Options and DynamicOptions', () => {
      test('it should return the array of arrays when they are separate', () => {
        const input = [
          1,
          2,
          new DynamicOptions((next, prev) => prev),
          new Options(3, 4),
          3,
          4,
        ];
        const result = getPermutations(input);

        expect(result).toEqual([
          [1, 2, 1, 3, 3, 4],
          [1, 2, 1, 4, 3, 4],
          [1, 2, 2, 3, 3, 4],
          [1, 2, 2, 4, 3, 4],
        ]);
      });

      test('it should return the array of arrays when they are nested', () => {
        const input = [
          1,
          2,
          new DynamicOptions(() => [new Options(1, 2), new Options(3, 4)]),
          3,
          4,
        ];
        const result = getPermutations(input);

        expect(result).toEqual([
          [1, 2, 1, 3, 3, 4],
          [1, 2, 1, 4, 3, 4],
          [1, 2, 2, 3, 3, 4],
          [1, 2, 2, 4, 3, 4],
        ]);
      });

      test.skip('it should return the array of arrays when the length is dynamic', () => {
        const testArr = [1, 2, 3, 4];
        const dynamicFn = (next, prev, index, arr) => {
          if (index >= arr.length) {
            return [];
          }

          if (testArr[index] % 2) {
            return [testArr[index]];
          }

          return [testArr[index], new DynamicOptions(dynamicFn)];
        };

        const input = [new DynamicOptions(dynamicFn)];

        const result = getPermutations(input);

        expect(result).toEqual([]);
      });
    });
  });
});
