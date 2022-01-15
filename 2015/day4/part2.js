const MD5 = require("crypto-js/md5");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day4/input.txt");

function getHash(str) {
  let hashNum = 0;
  while (true) {
    if (MD5(str + hashNum).toString().substring(0, 6) === "000000") {
      return hashNum;
    }
    hashNum++;
  }
}

console.log(getHash(str));