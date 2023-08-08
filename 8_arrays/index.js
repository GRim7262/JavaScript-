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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((value, i, obj) => {
  return value > 8;
});
console.log(found);
