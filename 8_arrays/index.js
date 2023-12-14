//Basics of array
// const evenNumbers = new Array();

// const evenNumbers = [2, 4, 6, 8, 10];
// const twoArray = evenNumbers[0];

// CRUD - Array

// CREATE
// const days = [];

// PUSH -> Add element from end
// days.push("Sunday");

// UNSHIFT -> Add element from front
// days.unshift(
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// );

// console.log("Days", days);
// console.log({ days });

// READ

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const sunday = days[0];

// UPDATE

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// days[7] = "S";
// console.log(days);

// DELETE

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// POP -> Remove last element
// days.pop();

// SHIFT -> Remove first element
// days.shift();

// SPLICE -> Remove desired elements -> Modify original array
// days.splice(1, 3);

// SLICE
// const slicedDays = days.slice(1, 5);

// FILTER -> We can remove elements using condition

// const filteredDays = days.filter((value, index, array) => {
//   return value.length > 6;
// });

// Simple loop
// for (let i = 0; i <= days.length - 1; i++) {
//   console.log(`Today is ${days[i]}`);
// }

// For of loop

// for (let day of days) {
//   console.log(`Today is ${day}`);
// }

// For each loop

// const day = days.forEach((days, index) => {
//   console.log(`Today is ${days}, ${index}`);
// });

// Map loop
// const newDays = days.map((day, index) => {
//   console.log(`Today is ${day}, ${index}`);
//   return day[0];
// });
// console.log(newDays);

// MORE METHOD

// Find

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((value, index, obj) => {
//   return value > 8;
// });

// console.log(found);

// Index of

// const array1 = [5, 12, 8, 130, 44, 8];

// const index = array1.indexOf(8, 4);
// console.log(index);

// Find index

// const array1 = [1, 1, 3, 7, 5, 6];

// const index = array1.findIndex((value) => {
//   return value % 2 === 0;
//   // if (value % 2 === 0) {
//   //   return value;
//   // }
// });
// console.log(index);

// Concat

// const array1 = ["a", "b", "c"];
// const array2 = ["e", "d", "f"];

// const array3 = array1.concat(array2);
// console.log(array3);

// At

// const array1 = [5, 12, 8, 130, 44];
// let index = 2;

// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// );

// ARRAY CHECKERS METHODS

// EVERY

// const array1 = [1, 30, 39, 29, 10, 13, 50];
// console.log(
//   array1.every((value) => {
//     return value < 40;
//   })
// );

// SOME

// const array1 = [1, 30, 39, 29, 10, 13, 50];

// console.log(
//   array1.some((value) => {
//     return value < 40;
//   })
// );

// INCLUDE

// const array1 = [1, 30, 39, 29, 10, 13, 50, 30];

// console.log(array1.includes(30, 6));

// IsArray

// const array1 = [1, 30, 39, 29, 10, 13, 50, 30];
// const obj = {
//   name: "Vinal",
// };
// const isArray = Array.isArray(array1);
// console.log(isArray);

// REDUCE

// const array1 = [5, 4, 3, 2, 1];
// const sum = array1.reduce((previousValue, currentValue) => {
//   return previousValue * currentValue;
// }, 1);
// console.log(sum);

// SORT

// const months = ["March", "Jan", "Feb", "Dec"];
// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000];
// console.log(array1.sort((a, b) => a - b));

// JOIN

// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join());

// const date = [10, 12, 2022];
// console.log(date.join("/"));

// FLAT

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]

const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));
console.log(array1.fill(5, 1));
console.log(array1.fill(6));
