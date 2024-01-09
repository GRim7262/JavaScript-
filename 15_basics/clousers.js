function sum(a, b) {
  var sum = a + b;
  return function () {
    return a + b + c;
  };
}
const sumReturnValue = sum(1, 2);
console.log(sumReturnValue);
