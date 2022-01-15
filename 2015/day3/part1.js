const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day3/input.txt");

function getHousesVisited(str) {
  let coords = new Set().add("0x0");
  let currCoords = { x: 0, y: 0 };

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ">") {
      currCoords.x += 1
    } else if (str.charAt(i) === "v") {
      currCoords.y -= 1
    } else if (str.charAt(i) === "<") {
      currCoords.x -= 1
    } else if (str.charAt(i) === "^") {
      currCoords.y += 1
    }

    coords.add(`${currCoords.x}x${currCoords.y}`)
  }

  return coords.size;
}

expect(getHousesVisited(">")).to.equal(2);
expect(getHousesVisited("^>v<")).to.equal(4);
expect(getHousesVisited("^v^v^v^v^v")).to.equal(2);

console.log(getHousesVisited(str));
