const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day6/input.txt");
const arr = str.split("\n");
const commands = ['turn off', 'turn on', 'toggle'];

function getNumlights(arr) {
  let lights = Array(1000).fill().map(() => Array(1000).fill(false));
  const instructions = parseCommands(arr);
  instructions.forEach(instruction => {
    if (instruction.command === commands[1]) {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = true;
        }
      }
    } else if (instruction.command === commands[2]) {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = !lights[i][j];
        }
      }
    } else {
      for (let i = instruction.x1; i <= instruction.x2; i++) {
        for (let j = instruction.y1; j <= instruction.y2; j++) {
          lights[i][j] = false;
        }
      }
    }
  });
  return lights.map(row => row.map(v => (v ? 1 : 0)).reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0);
}

function parseCommands(arr) {
  return arr.map(line => {
    let [, action, from_x, from_y, through_x, through_y] =
      /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/.exec(line);

    [from_x, from_y, through_x, through_y] = [from_x, from_y, through_x, through_y].map(Number)

    return {
      command: action,
      x1: from_x,
      y1: from_y,
      x2: through_x,
      y2: through_y,
    };
  });
}

expect(getNumlights(["turn on 0,0 through 2,2"])).to.equal(9);
expect(getNumlights(["turn on 0,0 through 999,999"])).to.equal(1000000);
expect(getNumlights(["turn on 0,0 through 999,999", "toggle 0,0 through 999,0"])).to.equal(1000000 - 1000);
expect(getNumlights(["toggle 0,0 through 999,0"])).to.equal(1000);
expect(getNumlights(["turn off 499,499 through 500,500"])).to.equal(0);
expect(getNumlights(["turn on 499,499 through 500,500"])).to.equal(4);
expect(getNumlights(["turn on 0,0 through 999,999", "toggle 0,0 through 999,0"])).to.equal(999000);

console.log(getNumlights(arr));