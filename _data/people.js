const fs = require("fs");
const path = require("path");
const files = fs.readdirSync(path.resolve(__dirname, "../data/people"), {
  encoding: "utf-8"
});
const data = [];
for (const file of files) {
  const json = fs.readFileSync(
    path.resolve(__dirname, "../data/people", file),
    { encoding: "utf-8" }
  );
  data.push(JSON.parse(json));
}

module.exports = data;
