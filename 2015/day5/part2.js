const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day5/input.txt");
const arr = str.split("\n");

function getNumNiceStrings(arr) {
  let numNice = 0;
  arr.forEach(str => {
    if (containsStrCombo(str) && containsRepeat(str)) {
      numNice++
    }
  });
  return numNice;
}

function containsRepeat(str) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) {
      return true;
    }
  }
  return false;
}

function containsStrCombo(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const combo = str[i] + str[i + 1];
    const left = str.substring(i + 2);
    if (left.includes(combo)) {
      return true;
    }
  }
  return false;
}

expect(getNumNiceStrings(["qjhvhtzxzqqjkmpb"])).to.equal(1);
expect(getNumNiceStrings(["xxyxx"])).to.equal(1);
expect(getNumNiceStrings(["uurcxstgmygtbstg"])).to.equal(0);
expect(getNumNiceStrings(["ieodomkazucvgmuy"])).to.equal(0);

console.log(getNumNiceStrings(arr));