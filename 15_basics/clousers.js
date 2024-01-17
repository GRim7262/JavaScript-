function sum(a, b) {
  let sum = a + b;
  return function (c) {
    return sum + c;
  };
}
const sumReturnValue = sum(1, 2);
console.log(sumReturnValue(5));
