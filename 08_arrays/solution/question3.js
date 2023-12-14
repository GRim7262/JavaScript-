const fact = 4;
function factorial(num) {
  const value = new Array(num)
    .fill(1)
    .map((value, i) => value * i + 1)
    .reduce((prev, curr) => prev * curr, 1);
  //   console.log(value);
  return value;
}
console.log("Factorial of", fact + " is", factorial(fact));
