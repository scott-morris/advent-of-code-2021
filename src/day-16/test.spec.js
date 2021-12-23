// Functions to Test
const parseInput = require('./parse-input.js');
const { decodePacket, part1 } = require('./part1.js');
const { part2 } = require('./part2.js');

// Test Input
const input = 'D2FE28';
const parsedInput = '110100101111111000101000';

const examples = [
  { input: '8A004A801A8002F478', result: 16 },
  { input: '620080001611562C8802118E34', result: 12 },
  { input: 'C0015000016115A2E0802F182340', result: 23 },
  { input: 'A0016C880162017C3686B18A3D4780', result: 31 },
];

// Test Specs

describe('day16-parse-input: ', () => {
  test('parsing the sample data should equal the handcoded expectation', () => {
    expect(parseInput(input)).toEqual(parsedInput);
  });
});

describe('day16-part1: ', () => {
  describe('decodePacket()', () => {
    test('it should process the initial use case', () => {
      expect(decodePacket(parsedInput)).toEqual({
        packetVersion: 6,
        packetTypeId: 4,
        type: 'value',
        binary: '011111100101',
        value: 2021,
        remaining: '',
      });
    });

    test('it should properly parse literal values', () => {
      expect(decodePacket('11010001010')).toEqual({
        binary: '1010',
        packetTypeId: 4,
        packetVersion: 6,
        type: 'value',
        value: 10,
        remaining: '',
      });

      expect(decodePacket('110100010100101001000100100')).toEqual({
        binary: '1010',
        packetTypeId: 4,
        packetVersion: 6,
        type: 'value',
        value: 10,
        remaining: '0101001000100100',
      });

      expect(decodePacket('0101001000100100')).toEqual({
        binary: '00010100',
        packetTypeId: 4,
        packetVersion: 2,
        type: 'value',
        value: 20,
        remaining: '',
      });
    });

    test('it should properly identify length-based subpackets', () => {
      expect(
        decodePacket('00111000000000000110111101000101001010010001001000000000')
      ).toEqual({
        packetVersion: 1,
        packetTypeId: 6,
        type: 'length',
        length: 27,
        subPackets: [
          {
            binary: '1010',
            packetTypeId: 4,
            packetVersion: 6,
            type: 'value',
            value: 10,
          },
          {
            binary: '00010100',
            packetTypeId: 4,
            packetVersion: 2,
            type: 'value',
            value: 20,
          },
        ],
        remaining: '',
      });
    });

    test('it should properly identify count-based subpackets', () => {
      expect(
        decodePacket('11101110000000001101010000001100100000100011000001100000')
      ).toEqual({
        packetVersion: 7,
        packetTypeId: 3,
        type: 'count',
        length: 3,
        subPackets: [
          {
            binary: '0001',
            packetTypeId: 4,
            packetVersion: 2,
            type: 'value',
            value: 1,
          },
          {
            binary: '0010',
            packetTypeId: 4,
            packetVersion: 4,
            type: 'value',
            value: 2,
          },
          {
            binary: '0011',
            packetTypeId: 4,
            packetVersion: 1,
            type: 'value',
            value: 3,
          },
        ],
        remaining: '',
      });
    });
  });

  test.each(examples)(
    'processing $input should equal $result',
    ({ input: example, result }) => {
      const parsed = parseInput(example);
      expect(part1(parsed)).toEqual(result);
    }
  );
});

describe.skip('day16-part2: ', () => {
  test('processing sample data should equal 99999', () => {
    expect(part2(parsedInput)).toEqual(99999);
  });
});
