const fs = require("fs");

function readInput(path) {
  try {
    let data = fs.readFileSync(path, "utf8");
    return data.toString();
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

module.exports = { readInput };
