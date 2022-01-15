const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day3/input.txt");

function getHousesVisited(str) {
  let coords = new Set().add("0x0");
  let currCoordsHuman = { x: 0, y: 0 };
  let currCoordsRobo = { x: 0, y: 0 };
  let roboSantaTurn = false;

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      if (str.charAt(i) === ">") {
        currCoordsHuman.x += 1
      } else if (str.charAt(i) === "v") {
        currCoordsHuman.y -= 1
      } else if (str.charAt(i) === "<") {
        currCoordsHuman.x -= 1
      } else if (str.charAt(i) === "^") {
        currCoordsHuman.y += 1
      }
      coords.add(`${currCoordsHuman.x}x${currCoordsHuman.y}`)
    } else {
      if (str.charAt(i) === ">") {
        currCoordsRobo.x += 1
      } else if (str.charAt(i) === "v") {
        currCoordsRobo.y -= 1
      } else if (str.charAt(i) === "<") {
        currCoordsRobo.x -= 1
      } else if (str.charAt(i) === "^") {
        currCoordsRobo.y += 1
      }

      coords.add(`${currCoordsRobo.x}x${currCoordsRobo.y}`)
    }
  }

  return coords.size;
}

expect(getHousesVisited("^v")).to.equal(3);
expect(getHousesVisited("^>v<")).to.equal(3);
expect(getHousesVisited("^v^v^v^v^v")).to.equal(11);

console.log(getHousesVisited(str));
