const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day6/input.txt");
const arr = str.split("\n");
const commands = ['turn off', 'turn on', 'toggle'];

function getNumlights(arr) {
  let lights = Array(1000).fill().map(() => Array(1000).fill(0));
  const instructions = parseCommands(arr);
  instructions.forEach(instruction => {
    if (instruction.command === commands[1]) {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = 1;
        }
      }
    } else if (instruction.command === commands[0]) {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = 0;
        }
      }
    } else if (instruction.command === commands[2]) {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = lights[i][j] === 0 ? 1 : 0;
        }
      }
    }
  });
  return lights.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b);
}

function parseCommands(arr) {
  return arr.map(line => {
    const broken = line.split(' ');
    if (broken[0] === "turn") {
      if (broken[1] === "on") {
        return {
          command: commands[1],
          x1: broken[2].split(',')[0],
          y1: broken[2].split(',')[1],
          x2: broken[4].split(',')[0],
          y2: broken[4].split(',')[1]
        }
      } else if (broken[1] === 'off') {
        return {
          command: commands[0],
          x1: broken[2].split(',')[0],
          y1: broken[2].split(',')[1],
          x2: broken[4].split(',')[0],
          y2: broken[4].split(',')[1]
        }
      }
    } else {

      return {
        command: commands[2],
        x1: broken[1].split(',')[0],
        y1: broken[1].split(',')[1],
        x2: broken[3].split(',')[0],
        y2: broken[3].split(',')[1]
      }
    }
  })
}

expect(getNumlights(["turn on 0,0 through 2,2"])).to.equal(9);
expect(getNumlights(["turn on 0,0 through 999,999"])).to.equal(1000000);
expect(getNumlights(["toggle 0,0 through 999,0"])).to.equal(1000);
expect(getNumlights(["turn off 499,499 through 500,500"])).to.equal(0);
expect(getNumlights(["turn on 0,0 through 999,999", "toggle 0,0 through 999,0"])).to.equal(999000);

console.log(getNumlights(arr));