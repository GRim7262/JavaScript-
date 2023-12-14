const path = require("path");
const { pathToFileURL } = require("url");
// console.log(__filename);
// console.log(__dirname);
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.join("/hello", "/hello", "file.txt"));
// console.log(path.join("hello", "hello", "file.txt"));
// console.log(path.join("hello", "//hello", "file.txt"));
// console.log(path.join("hello", "hello/", "/file.txt"));
// console.log(path.join("hello", "hello", "../file.txt"));

// console.log(path.resolve("/hello1", "/hello2", "file.txt"));
// console.log(path.resolve("hello1", "hello2", "file.txt"));
// console.log(path.resolve("hello1", "//hello2", "file.txt"));
// console.log(path.resolve("hello1", "hello2/", "/file.txt"));
// console.log(path.resolve("hello1", "hello2", "../file.txt"));

const pathprops = path.parse("/foo/bar/node.js");
console.log(pathprops);
