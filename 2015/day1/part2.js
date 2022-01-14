const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day1/input.txt");

function calcFirstBasement(str) {
  let floor = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      floor++;
    } else if (str.charAt(i) === ")") {
      floor--;
    }
    if (floor < 0) {
      return i + 1;
    }
  }
}

expect(calcFirstBasement(")")).to.equal(1);
expect(calcFirstBasement("()())")).to.equal(5);

console.log(calcFirstBasement(str));
