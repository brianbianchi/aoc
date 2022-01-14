const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day2/input.txt");
const arr = str.split("\r\n");

function calcRibbon(arr) {
  let ribbon = 0;

  arr.forEach((dims) => {
    const dimsArr = dims.split("x").map(Number);
    const l = dimsArr[0];
    const w = dimsArr[1];
    const h = dimsArr[2];
    const wrap = Math.min(...[l + l + w + w, w + w + h + h, l + l + h + h]);
    const bow = l * w * h;

    ribbon += wrap + bow;
  });
  return ribbon;
}

expect(calcRibbon(["2x3x4"])).to.equal(34);
expect(calcRibbon(["1x1x10"])).to.equal(14);
console.log(calcRibbon(arr));
