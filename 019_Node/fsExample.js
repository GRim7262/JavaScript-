const { error } = require("console");
const fs = require("fs");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const fileContent = fs.readFileSync("file.txt", "utf-8");
// console.log(fileContent);

// fs.writeFile("text.txt", "Subscribe to our channel 2", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log("File written successfully");
//   }
// });

// const fileWrite = fs.writeFileSync("textSync.txt", "Hello", "utf-8");
// console.log("File written successfully");

// fs.stat("file.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log(stats);
//   }
// });

// const syncStat = fs.statSync("file.txt");
// console.log(syncStat);

// fs.mkdir("new_directory", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log("Directory created");
//   }
// });

// fs.rmdir("new_directory", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log("Directory removed");
//   }
// });

// fs.unlink("file.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log("File deleted");
//   }
// });

const deleteFile = fs.unlinkSync("file.txt");
console.log(deleteFile);
