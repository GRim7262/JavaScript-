// Basics of array
// const evenNumbers = new Array();

// const evenNumbers = [2, 4, 6, 8, 10];
// const evenObjects = {
//   0: 2,
//   1: 4,
//   2: 6,
//   3: 8,
//   4: 10,
// };

// const twoObject = evenObjects[0];
// const twoArray = evenNumbers[0];

// console.log(twoObject);
// console.log(twoArray);

// CRUD Operation with array

//CREATE
// const days = [];
//Push -> Add elements from end
// days.push(
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday"
// );
// UnShift -> Add elements from start
// console.log({ days });

//READ

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// days[0] = "Sun";
// days[7] = "S";
// console.log(days);

//DELETE

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

//Pop -> Remove elements from end
// days.pop();

//Shift -> Remove elements from start
// days.shift();

//Splice -> Remove desired element
// days.splice(1, 3);

//Slice -> Slice elements from original array -> then returns new array
// const silcedDays = days.slice(1, 5);
// console.log(days, silcedDays);

//Filter -> We can remove elements using condition
// const filteredDays = days.filter((value, index, array) => {
//   return value.length > 8;
// });
// console.log(filteredDays);

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

//Simple for loop
// for (let i = 0; i <= days.length - 1; i++) {
//   console.log(`Today is ${days[i]}`);
// }
// console.log(`**************************`);
//For of loop
// for (day of days) {
//   console.log(`Today is ${day}`);
// }
// console.log(`**************************`);
//For each loop
// days.forEach((days, index) => {
//   console.log(`[${index}] Today is ${days}`);
// });
//Map loop
// const newDays = days.forEach((days, index) => {
//   console.log(`[${index}] Today is ${days}`);
//   return days[0];
// });
// console.log(newDays);

//More Methods

//Find

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((value, i, obj) => {
//   return value > 8;
// });
// console.log(found);

//Index of

// const array1 = [5, 12, 8, 130, 44, 8];
// const index = array1.indexOf(8, 4);
// console.log(index);

//Find index

// const array1 = [1, 1, 3, 5, 5, 6];
// const index = array1.findIndex((value) => {
//   if (value % 2 == 0) {
//     return value;
//   }
// });
// console.log(index);

//Concat
// const array1 = ["Vinal"];
// const array2 = ["Pawar"];
// const joinedArray = array1.concat(array2, array1);

// console.log(joinedArray);

//at

// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// );

//Array checker methods

//EVERY

// const array1 = [1, 30, 39, 29, 10, 13, 31];
// console.log(
//   array1.every((value) => {
//     return value < 40;
//   })
// );

//Some
// const array1 = [55, 50, 5];
// console.log(
//   array1.some((value) => {
//     return value < 40;
//   })
// );

//Include
// const array1 = [1, 30, 39, 29, 10, 13, 31, 10];
// console.log(array1.includes(10, 5));

//IsArray
// const array1 = "1, 30, 39, 29, 10, 13, 31, 10";
// const IsArray = Array.isArray(array1);
// console.log(IsArray);

//REDUCE

// const array1 = [1, 2, 3, 4];
// const sum = array1.reduce((previousValue, currentValue) => {
//   return previousValue * currentValue;
// }, 1);

// console.log(sum);

const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());
const array1 = [1, 30, 4, 21, 100000];
console.log(array1.sort((a, b) => b - a));
