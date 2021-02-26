const data = "./US-PRODUCT-FEED.txt";

const file_name = "US-PRODUCT-FEED";

const readline = require("readline");
const fs = require("fs");

const lineReader = readline.createInterface({
  input: fs.createReadStream(data),
});

let isHeader = false;
let columnNames = [];

function parseLine(line) {
  return line.trim().split("\t");
}

function createRowObject(values) {
  const rowObject = {};

  columnNames.forEach((value, index) => {
    rowObject[value] = values[index];
  });

  return rowObject;
}

const json = {};
json[file_name] = [];

lineReader.on("line", function (line) {
  if (!isHeader) {
    columnNames = parseLine(line);
    isHeader = true;
  } else {
    json[file_name].push(createRowObject(parseLine(line)));
  }
});

//writes up the file name
lineReader.on("close", function () {
  return fs.writeFileSync(file_name + ".json", JSON.stringify(json, null, 2));
});
