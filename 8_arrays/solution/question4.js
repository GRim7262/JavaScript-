function secondLargest(numbers) {
  return numbers.sort((a, b) => b - a)[1];
}

console.log(secondLargest([54, 23, 11, 17, 10]));
