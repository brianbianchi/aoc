const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day2/input.txt");
const arr = str.split("\r\n");

function calcWrapping(arr) {
  let area = 0;

  arr.forEach((dims) => {
    const dimsArr = dims.split("x");
    const l = dimsArr[0];
    const w = dimsArr[1];
    const h = dimsArr[2];
    const smallest = Math.min(...[l * w, w * h, h * l]);

    area += 2 * l * w + 2 * w * h + 2 * h * l + smallest;
  });
  return area;
}

expect(calcWrapping(["2x3x4"])).to.equal(58);
expect(calcWrapping(["1x1x10"])).to.equal(43);

console.log(calcWrapping(arr));
