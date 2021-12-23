/* eslint-disable no-use-before-define */
// Dependencies

const { processMultiplePackets } = require('./part1');
const math = require('../helpers/math');

// Private

function getSum(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return math.sum(values);
}

function getProduct(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return values.reduce((product, val) => product * val, 1);
}

function getMinimum(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return Math.min(...values);
}

function getMaximum(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return Math.max(...values);
}

function isGreaterThan(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return values.every(
    (val, i) => i === values.length - 1 || val > values[i + 1]
  )
    ? 1
    : 0;
}

function isLessThan(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return values.every(
    (val, i) => i === values.length - 1 || val < values[i + 1]
  )
    ? 1
    : 0;
}

function isEqualTo(packet) {
  const values = packet.subPackets.map(getPacketValue);
  return values.every(
    (val, i) => i === values.length - 1 || val === values[i + 1]
  )
    ? 1
    : 0;
}

function getPacketValue(packet) {
  const valueFunctions = {
    0: getSum,
    1: getProduct,
    2: getMinimum,
    3: getMaximum,
    4: ({ value }) => value,
    5: isGreaterThan,
    6: isLessThan,
    7: isEqualTo,
  };

  return valueFunctions[packet.packetTypeId](packet);
}

// Public

function part2(input) {
  const { packets } = processMultiplePackets(input);
  return getPacketValue(packets[0]);
}

module.exports = { part2 };
