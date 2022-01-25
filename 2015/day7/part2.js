const { expect } = require("chai");
const { readInput } = require("../../util/helper");

const str = readInput("./2015/day7/input.txt");
const arr = str.split("\r\n");
const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: (a) => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b,
};
const wires = parseInstructions(arr);
wires.set("b", { args: [3176] });

function calculateWire(wireName) {
  const wire = wires.get(wireName);

  if (typeof wireName === "number") return wireName;
  if (typeof wire === "number") return wire;
  if (typeof wire === "undefined") return undefined;

  if (!wire.command) {
    wires.set(wireName, calculateWire(wire.args[0]));
  } else {
    wires.set(
      wireName,
      BITWISE_METHODS[wire.command](
        calculateWire(wire.args[0]),
        calculateWire(wire.args[1])
      )
    );
  }

  return wires.get(wireName);
}

function parseInstructions(arr) {
  let wires = new Map();
  arr.forEach((line) => {
    const separated = line.split(" ");
    if (separated.length === 3) {
      wires.set(separated[2], {
        command: undefined,
        args: [separated[0]].map((arg) =>
          isNaN(Number(arg)) ? arg : Number(arg)
        ),
      });
    } else if (separated.length === 4) {
      wires.set(separated[3], {
        command: separated[0],
        args: [separated[1]].map((arg) =>
          isNaN(Number(arg)) ? arg : Number(arg)
        ),
      });
    } else if (separated.length === 5) {
      wires.set(separated[4], {
        command: separated[1],
        args: [separated[0], separated[2]].map((arg) =>
          isNaN(Number(arg)) ? arg : Number(arg)
        ),
      });
    }
  });
  return wires;
}

const exampleInput = readInput("./2015/day7/exampleinput.txt").split("\r\n");

expect(parseInstructions(exampleInput).get("h")).to.eql({
  command: "NOT",
  args: ["x"],
});

console.log(calculateWire("a"));
