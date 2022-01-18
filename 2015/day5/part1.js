const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day5/input.txt");
const arr = str.split("\n");

function getNumNiceStrings(arr) {
  let numNice = 0;
  arr.forEach(str => {
    if (containsThreeVowels(str) && containsDoubleLetter(str) && !containsStrCombo(str)) {
      numNice++
    }
  });
  return numNice;
}

function containsThreeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let numVowels = 0;
  for (let i = 0; i < str.length; i++) {
    vowels.forEach(vowel => {
      if (str.charAt(i) === vowel) numVowels++;
    });
  }
  return numVowels >= 3;
}

function containsDoubleLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

function containsStrCombo(str) {
  const combos = ['ab', 'cd', 'pq', 'xy'];
  for (let i = 0; i < combos.length; i++) {
    if (str.includes(combos[i])) {
      return true;
    }
  }
  return false;
}

expect(getNumNiceStrings(["ugknbfddgicrmopn"])).to.equal(1);
expect(getNumNiceStrings(["aaa"])).to.equal(1);
expect(getNumNiceStrings(["jchzalrnumimnmhp"])).to.equal(0);
expect(getNumNiceStrings(["haegwjzuvuyypxyu"])).to.equal(0);
expect(getNumNiceStrings(["dvszwmarrgswjxmb"])).to.equal(0);

console.log(getNumNiceStrings(arr));