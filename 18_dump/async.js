// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello World");

/* ----------------------------------------------- */
// const { log } = require("console");
// const fs = require("fs");
// function kiratReadFile() {
//   return new Promise(function (resolve) {
//     console.log("Inside promise");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("before resolve");
//       resolve(data);
//     });
//   });
// }
// function onDone(data) {
//   console.log(data);
// }
// kiratReadFile().then(onDone);
/* ----------------------------------------------- */

// let d = new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve("foo");
//   }, 2000);
// });

// function callback() {
//   console.log(d);
// }
// console.log(d);
// d.then(callback);
/* ----------------------------------------------- */

// const p = new Promise(function (resolve) {});
// const p = new Promise((resolve) => {
//   resolve("Hi there");
// });

// p.then(() => {
//   console.log(p);
// });
/* ----------------------------------------------- */

// const kiratAsyncFunction = () => {
//   let p = new Promise((resolve) => {
//     resolve("hi there");
//   });
//   return p;
// };

// kiratAsyncFunction().then((data) => {
//   console.log(data);
// });
/* ----------------------------------------------- */

function kiratAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Hi there");
    }, 3000);
  });
  return p;
}

async function main() {
  let value = await kiratAsyncFunction();
  console.log("Hi there1");
}
main();
console.log("After main");
