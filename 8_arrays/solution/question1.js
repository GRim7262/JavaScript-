//Create a function that concatenates n input arrays, where n is variable.
//concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// const concat = (...arr) => {
//   return [].concat(...arr);
// };
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));
// console.log(concat([1, 2], [3, 4]));
// console.log(concat([4, 4, 4, 4, 4]));

// Define a function named 'concat' that takes a variable number of arrays as arguments.
const concat = (...num) => {
  // Log the flattened array obtained by using the 'flat' method with depth 1.
  console.log(num.flat());
};
concat([1, 2, 3], [4, 5], [6, 7]);
concat([1], [2], [3], [4], [5], [6], [7]);
concat([1, 2], [3, 4]);
concat([4, 4, 4, 4, 4]);
