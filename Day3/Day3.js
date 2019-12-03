import fs from "fs";

const wires = fs
  .readFileSync("Day3/data.txt")
  .toString()
  .split("\n");

const calcManhattanDistance = (p, q) => {
  return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]);
};

const walkPath = (command, pos, path) => {};

const generatePathArray = wireString => {
  const wire = wireString.split(",");
  let pos = { x: 0, y: 0 };
  let path = [];
  for (let i = 0; i < wire.length; i++) {
    const distance = parseInt(wire[i].substring(1));
    switch (wire[i][0]) {
      case "R":
        for (let x = pos.x; x < pos.x + distance; x++) {
          path.push([x, pos.y]);
        }
        break;
      case "U":
        for (let y = pos.y; y < pos.y + distance; y++) {
          path.push([pos.x, y]);
        }
        break;
      case "D":
        for (let y = pos.y; y > pos.y - distance; y--) {
          path.push([pos.x, y]);
        }
        break;
      case "L":
        for (let x = pos.x; x > pos.x - distance; x--) {
          path.push([x, pos.y]);
        }
        break;
    }
  }
  return path;
};

const Day3A = () => {
  const path1 = generatePathArray(wires[0]);
  const path2 = generatePathArray(wires[1]);

  return generatePathArray(wires[0]);
};

export { Day3A };
