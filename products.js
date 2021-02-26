"use strict";

//solution 1
const fs = require("fs"); // importing the file system package
const rawData = fs.readline('US-PRODUCT-FEED.TXT')
const data = JSON.parse(rawData)
console.log(data)

//solution 2

// const readline = require("readline");

// function convert(file) {
//   return new Promise((resolve, reject) => {
//     const stream = fs.createReadStream(file);
//     // Handle stream error (IE: file not found)
//     stream.on("error", reject);

//     const reader = readline.createInterface({
//       input: stream,
//     });

//     const array = [];

//     reader.on("line", (line) => {
//       array.push(JSON.parse(line));
//     });

//     reader.on("close", () => resolve(array));
//   });
// }

// convert("US-PRODUCT-FEED.txt")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));


// solution 3
// const removeByteOrderMark = (str) => {
//   return str.replace(/^\ufeff/g, "");
// };

// const data = "US-PRODUCT-FEED.txt";


// const file_name = 'US-PRODUCT-FEED.txt';

// const readline = require('readline');
// const fs = require('fs');

// const lineReader = readline.createInterface({
//     input: fs.createReadStream(file_name)
// });

// let isHeader = false;
// let columnNames = [];

// function parseLine(line) {
//     return line.trim().split('\t')
// }

// function createRowObject(values) {
//     const rowObject = {};

//     columnNames.forEach((value,index) => {
//         rowObject[value] = values[index];
//     });

//     return rowObject;
// }

// const json = {};
// json[file_name] = [];

// lineReader.on('line', function (line) {
//     if(!isHeader) {
//         columnNames = parseLine(line);
//         isHeader = true;
//     } else {
//         json[file_name].push(createRowObject(parseLine(line)));
//     }
// });

// lineReader.on('close', function () {
//   return fs.writeFileSync(file_name + '.json', JSON.stringify(json,null,2));
// });
