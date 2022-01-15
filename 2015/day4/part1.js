const { expect } = require("chai");
const MD5 = require("crypto-js/md5");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day4/input.txt");

function getHash(str) {
  let hashNum = 0;
  while (true) {
    if (MD5(str + hashNum).toString().substring(0, 5) === "00000") {
      return hashNum;
    }
    hashNum++;
  }
}

expect(getHash("abcdef")).to.equal(609043);
expect(getHash("pqrstuv")).to.equal(1048970);

console.log(getHash(str));