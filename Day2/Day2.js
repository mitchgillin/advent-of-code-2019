import fs from "fs";

const opCode = fs
  .readFileSync("./Day2/data.txt")
  .toString()
  .split(",")
  .map(val => parseInt(val));

let mutOpCode = [...opCode];

const resetOpCode = (noun, verb) => {
  mutOpCode = [...opCode];
  mutOpCode[1] = noun;
  mutOpCode[2] = verb;
};
const add = (pos1, pos2, newPos) => {
  mutOpCode[newPos] = mutOpCode[pos1] + mutOpCode[pos2];
};

const multiply = (pos1, pos2, newPos) => {
  mutOpCode[newPos] = mutOpCode[pos1] * mutOpCode[pos2];
};

const calcIntcode = () => {
  for (let i = 0; i < mutOpCode.length; i += 4) {
    switch (mutOpCode[i]) {
      case 1:
        add(mutOpCode[i + 1], mutOpCode[i + 2], mutOpCode[i + 3]);
        break;
      case 2:
        multiply(mutOpCode[i + 1], mutOpCode[i + 2], mutOpCode[i + 3]);
        break;
      case 99:
        return mutOpCode[0];
      default:
        console.log("Hmmm something doesn't seem right");
        break;
    }
  }
};

const Day2A = () => {
  resetOpCode(12, 2);
  console.log(mutOpCode);
  return calcIntcode();
};

const Day2B = () => {
  const goal = 19690720;
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      resetOpCode(noun, verb);
      if (calcIntcode() == goal) {
        console.log([noun, verb]);
        return 100 * noun + verb;
      }
    }
  }
};

export { Day2A, Day2B };
