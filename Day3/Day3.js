import fs from "fs";

const wires = fs
  .readFileSync("Day3/data.txt")
  .toString()
  .split("\n");

const calcManhattanDistance = (p, q) => {
  return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]);
}

const generatePathArray = wireString => {
  const wire = wireString.split(",");
  let pos = { x: 0, y: 0 };
  let path = [];
  let steps = 0;
  for (let i = 0; i < wire.length; i++) {
    const distance = parseInt(wire[i].substring(1));
    switch (wire[i][0]) {
      case "R":
        for (let x = pos.x; x <= pos.x + distance; x++) {
          path.push([x, pos.y, steps++]);
        }
        pos.x = path[path.length-1][0];
        break;
      case "L":
        for (let x = pos.x; x >= pos.x - distance; x--) {
          path.push([x, pos.y, steps++]);
        }
        pos.x = path[path.length-1][0]; 
        break;
      case "U":
        for (let y = pos.y; y <= pos.y + distance; y++) {
          path.push([pos.x, y, steps++]);
        }
        pos.y= path[path.length-1][1];
        break;
      case "D":
        for (let y = pos.y; y >= pos.y - distance; y--) {
          path.push([pos.x, y, steps++]);
        }
        pos.y= path[path.length-1][1]; 
        break;
      
    }
  }
  return path;
};

const compareArrays = (path1, path2) => {
  let commonPoints = [];
  path1.forEach((point1 => {
    path2.forEach((point2)=>{
      if(point1[0] == point2[0] && point1[1] == point2[1]){
        console.log(point1[2] + point2[2])
        commonPoints.push(point1)
      }
    })
  }))
 
  return commonPoints;
}
 


const Day3A = () => {
  const path1 = generatePathArray(wires[0]);
  const path2 = generatePathArray(wires[1]);

  const commonPoints = compareArrays(path1, path2);

  const distances = commonPoints.map((point)=> {
    return calcManhattanDistance([0,0], point)
  });

  return Math.min(...distances.filter(dist=> dist !=0)); 
};

const Day3B = () => {
  const path1 = generatePathArray(wires[0]);
  const path2 = generatePathArray(wires[1]);

  const commonPoints = compareArrays(path1, path2);

  return commonPoints;
}

export { Day3A, Day3B };
