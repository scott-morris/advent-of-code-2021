/* eslint-disable no-use-before-define */
// Private

function getLiteralValue(binary) {
  let remaining = binary;
  let result = '';
  let binaryLength = 0;

  for (let done = false; !done; ) {
    const prefix = remaining[0];
    const value = remaining.slice(1, 5);
    binaryLength += 5;
    remaining = remaining.substring(5);
    result += value;

    if (prefix === '0') {
      done = true;
    }
  }

  return {
    type: 'value',
    binary: result,
    value: parseInt(result, 2),
    remaining: binary.substring(binaryLength),
  };
}

function getValueByLength(binary) {
  // the first 15 bits are a number that represents the total length in bits of the sub-packets contained by this packet
  const length = parseInt(binary.slice(0, 15), 2);
  const binSubPackets = binary.slice(15, 15 + length);
  const { packets: subPackets } = processMultiplePackets(binSubPackets);

  return {
    type: 'length',
    length,
    subPackets,
    remaining: binary.substring(15 + length),
  };
}

function getValueByCount(givenBinary) {
  // the first 11 bits are a number that represents the number of sub-packets immediately contained by this packet
  const numSubPackets = parseInt(givenBinary.slice(0, 11), 2);
  const binary = givenBinary.substring(11);

  const { packets: subPackets, remaining } = processMultiplePackets(
    binary,
    numSubPackets
  );

  return {
    type: 'count',
    length: numSubPackets,
    subPackets,
    remaining,
  };
}

function checkRemaining(remaining) {
  return parseInt(remaining, 2) > 0 ? remaining : '';
}

function flattenSubPackets(givenPackets) {
  return givenPackets.reduce(
    (packets, { subPackets = [], ...packet }) => [
      ...packets,
      packet,
      ...flattenSubPackets(subPackets),
    ],
    []
  );
}

// Public

function processMultiplePackets(givenBinary, count = Infinity) {
  let binary = givenBinary;
  const packets = [];

  for (let moreToProcess = true, i = 0; moreToProcess && i < count; i += 1) {
    const { remaining, ...packet } = decodePacket(binary);
    packets.push(packet);

    binary = checkRemaining(remaining);

    if (binary.length === 0) {
      moreToProcess = false;
    }
  }

  return { packets, remaining: binary };
}

function decodePacket(str) {
  const binPacketVersion = str.slice(0, 3);
  const binPacketTypeId = str.slice(3, 6);

  const packetVersion = parseInt(binPacketVersion, 2);
  const packetTypeId = parseInt(binPacketTypeId, 2);

  const { remaining, ...packet } =
    packetTypeId === 4
      ? getLiteralValue(str.substring(6))
      : str[6] === '0'
      ? getValueByLength(str.substring(7))
      : getValueByCount(str.substring(7));

  return {
    packetVersion,
    packetTypeId,
    ...packet,
    remaining: checkRemaining(remaining),
  };
}

function part1(input) {
  const { packets: nestedPackets } = processMultiplePackets(input);
  const packets = flattenSubPackets(nestedPackets);
  return packets.reduce((sum, packet) => sum + packet.packetVersion, 0);
}

module.exports = { processMultiplePackets, decodePacket, part1 };
