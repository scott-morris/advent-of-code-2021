/* eslint-disable no-bitwise */
/*
 *   aaaa   | a = 0b0000001
 *  b    c  | b = 0b0000010
 *  b    c  | c = 0b0000100
 *   dddd   | d = 0b0001000
 *  e    f  | e = 0b0010000
 *  e    f  | f = 0b0100000
 *   gggg   | g = 0b1000000
 */

// Dependencies

const math = require('../helpers/math');

// Private

const digits = {
  0b1110111: 0, // abc efg
  0b0100100: 1, //   c  f
  0b1011101: 2, // a cde g
  0b1101101: 3, // a cd fg
  0b0101110: 4, //  bcd f
  0b1101011: 5, // ab d fg
  0b1111011: 6, // ab defg
  0b0100101: 7, // a  c f
  0b1111111: 8, // abcdefg
  0b1101111: 9, // abcd fg
};

function missingLetters(str) {
  const arr = str.split('');
  return 'abcdefg'.split('').filter((letter) => !arr.includes(letter));
}

function numActiveBits(num) {
  const binary = num.toString(2).split('');
  return math.countValues(binary).get('1');
}

function splitToBitValues(num) {
  const parts = [];
  let remainder = num;
  for (let i = 6; i >= 0 || remainder === 0; i -= 1) {
    const bitValue = 2 ** i;
    if (remainder >= bitValue) {
      parts.push(bitValue);
      remainder %= bitValue;
    }
  }
  return parts;
}

function permutations(obj, checkFixed = true) {
  let duplicates = 0;

  if (checkFixed) {
    const fixed = {};
    const variant = {};
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        variant[key] = obj[key];
      } else {
        fixed[key] = obj[key];
      }
    });
    const variablePerms = permutations(variant, false);

    return variablePerms.map((p) => ({ ...fixed, ...p }));
  }

  const keys = Object.keys(obj);
  const key = keys[0];
  const keyValue = obj[key];

  if (keys.length === 1) {
    return keyValue.map((val) => (val === 0 ? {} : { [key]: val }));
  }

  const remainingObject = { ...obj };
  delete remainingObject[key];

  const additionalPermutations = permutations(remainingObject, false);
  return keyValue.reduce((res, val) => {
    additionalPermutations.forEach((addlObj) => {
      const opt = { [key]: val, ...addlObj };
      if (val > 0 && math.countValues(opt).size > Object.keys(addlObj).length) {
        res.push({ [key]: val, ...addlObj });
      } else {
        duplicates += 1;
      }
    });
    return res;
  }, []);
}

// Public
class Digit {
  constructor(map) {
    this.map = {
      a: 0b1111111,
      b: 0b1111111,
      c: 0b1111111,
      d: 0b1111111,
      e: 0b1111111,
      f: 0b1111111,
      g: 0b1111111,
      ...map,
    };
  }

  get bitmap() {
    const self = this;
    return Object.keys(self.map).reduce(
      (obj, key) => ({ ...obj, [key]: self.map[key].toString(2) }),
      {}
    );
  }

  get deciphered() {
    const obj = this.map;
    return Object.keys(obj).every((key) => numActiveBits(obj[key]) === 1);
  }

  processSignal(str) {
    const self = this;

    const updateMap = (arr, mask) => {
      arr.forEach((letter) => {
        self.map[letter] &= mask;
      });
    };

    const narrowDown = (mask) => {
      const match = str.split('');
      const noMatch = missingLetters(str);

      updateMap(match, mask);
      updateMap(noMatch, ~mask);
    };

    // When the length is [key], it can only match certain segments
    const lengthMatch = {
      2: 0b0100100, // two segments (1)
      3: 0b0100101, // three segments (7)
      4: 0b0101110, // four segments (4)
    };

    if (lengthMatch[str.length]) {
      narrowDown(lengthMatch[str.length]);
    }
  }

  processSignals(arr, decipher = true) {
    const self = this;

    // Process all of the signals
    arr.forEach((s) => {
      this.processSignal(s);
    });

    if (!decipher) {
      return;
    }

    // Decipher based on available options
    const splits = Object.keys(this.map).reduce((obj, key) => {
      const val = self.map[key];
      if (numActiveBits(val) === 1) {
        return { ...obj, [key]: val };
      }

      return { ...obj, [key]: splitToBitValues(val) };
    }, {});

    // Get all of the permutations
    const options = permutations(splits);

    for (let i = 0; i < options.length; i += 1) {
      self.map = options[i];
      if (arr.every((str) => self.translateDigit(str) !== undefined)) {
        break;
      }
    }
  }

  translateDigit(digit, binary = false) {
    const letters = this.map;
    const signals = digit.split('').map((letter) => letters[letter]);
    const signal = signals.reduce((s, i) => s | i, 0);

    return binary ? signal.toString(2) : digits[signal];
  }

  translate(arr) {
    const result = arr
      .map((e) => this.translateDigit.call(this, e))
      .map((e) => e.toString())
      .join('');

    return parseInt(result, 10);
  }
}

function translateOutput({ signal, output }) {
  // Decipher the pattern based on the signal
  const digit = new Digit();
  digit.processSignals(signal);
  return digit.translate(output);
}

function part2(input) {
  // Return the sum of all of the output numbers
  return input.reduce((sum, entry) => sum + translateOutput(entry), 0);
}

module.exports = { Digit, translateOutput, part2 };
