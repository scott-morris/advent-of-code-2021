// Libraries

const ora = require('ora');

// Private

const getValue = (val, memory) => (Number.isInteger(val) ? val : memory[val]);

const operations = {
  inp: ([register], memory, input) => {
    const inputValue = input.shift();
    return { ...memory, [register]: inputValue };
  },
  add: ([register, addValue], memory) => ({
    ...memory,
    [register]: memory[register] + getValue(addValue, memory),
  }),
  mul: ([register, mulBy], memory) => ({
    ...memory,
    [register]: memory[register] * getValue(mulBy, memory),
  }),
  div: ([register, divBy], memory) => {
    const divByValue = getValue(divBy, memory);
    if (divByValue === 0) {
      throw new Error('cannot divide by zero');
    }
    return {
      ...memory,
      [register]: parseInt(memory[register] / divByValue, 10),
    };
  },
  mod: ([register, modBy], memory) => {
    const modByValue = getValue(modBy, memory);
    if (modByValue === 0) {
      throw new Error('cannot divide by zero');
    }
    return { ...memory, [register]: memory[register] % modByValue };
  },
  eql: ([register, eqlTo], memory) => ({
    ...memory,
    [register]: memory[register] === getValue(eqlTo, memory) ? 1 : 0,
  }),
};

function processInstruction(instruction) {
  const [op, ...params] = instruction;

  if (typeof operations[op] !== 'function') {
    throw new Error(`There is no operation ${op}`);
  }

  return (memory, input) => operations[op](params, memory, input);
}

// Public

function processInstructions(instructions) {
  const fns = instructions.map((op) => processInstruction(op));

  return (input, memory = {}) =>
    fns.reduce((mem, op) => op(mem, input), {
      w: 0,
      x: 0,
      y: 0,
      z: 0,
      ...memory,
    });
}

function isValidModelNumber(modelNumber, validationFunction) {
  if (modelNumber.length !== 14 || modelNumber.includes('0')) {
    return false;
  }

  const memory = validationFunction(modelNumber);

  return memory.z === 0;
}

function part1(input) {
  const program = processInstructions(input);

  let firstHalf = 9999999999;
  let secondHalf = 9999;
  let modelNumber;

  const spinner = ora(`Running validation on ${firstHalf}xxxx`).start();

  for (let found = false; found === false && firstHalf + secondHalf > 0; ) {
    modelNumber = [
      ...firstHalf.toString().split(''),
      ...secondHalf.toString().split(''),
    ];
    found = isValidModelNumber(modelNumber, program);

    secondHalf -= 1;

    if (secondHalf < 0) {
      secondHalf = 9999;
      firstHalf -= 1;

      spinner.text = `Running validation on ${firstHalf}xxxx`;
      spinner.render();
    }
  }
  spinner.stop();

  return modelNumber;
}

module.exports = { processInstructions, isValidModelNumber, part1 };
