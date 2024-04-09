const fs = require("fs");
const path = require("path");
const os = require("os");
// Read the package.json file
const packageJson = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), "..", "..", "..", "package.json"),
    "utf8"
  )
);

// Get the value of the start script
const startScript = packageJson.scripts.start;

// Determine the value to set in the index.js file
let valueToSet;
if (startScript.includes("next")) {
  valueToSet = "next";
} else if (startScript.includes("expo")) {
  valueToSet = "expo";
} else {
  // Handle other cases if needed
  valueToSet = "unkown";
}

// Set the value in the node_modules/@unitools/utils/dist/index.js file
fs.writeFileSync(
  path.resolve(process.cwd(), "dist", "platform.js"),
  `module.exports = {value:"${valueToSet}"};`
);
