// Factorial of number using reduce method

// const array1 = [5, 4, 3, 2, 1];
// const sum = array1.reduce((previousValue, currentValue) => {
//   return previousValue * currentValue;
// }, 1);
// console.log(sum);

const factorial = (num) => {
  const value = new Array(num)
    .fill(1)
    .map((value, i) => value * i + 1)
    .reduce((prev, curr) => prev * curr, 1);
  return value;
};
console.log("Factorial = " + factorial(4));
