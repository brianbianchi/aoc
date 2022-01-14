const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day1/input.txt");

function calcFloor(str) {
  let floor = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      floor++;
    } else if (str.charAt(i) === ")") {
      floor--;
    }
  }
  return floor;
}

expect(calcFloor("(())")).to.equal(0);
expect(calcFloor("()()")).to.equal(0);
expect(calcFloor("(((")).to.equal(3);
expect(calcFloor("(()(()(")).to.equal(3);
expect(calcFloor("))(((((")).to.equal(3);
expect(calcFloor("())")).to.equal(-1);
expect(calcFloor("))(")).to.equal(-1);
expect(calcFloor(")))")).to.equal(-3);
expect(calcFloor(")())())")).to.equal(-3);

console.log(calcFloor(str));
