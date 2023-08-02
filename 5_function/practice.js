// Function without a parameter and return

// function without parameter,  a function which make a number square
// function square() {
//   let num = parseInt(prompt("Enter number to find square: "));
//   let sq = num * num;
//   alert(sq);
// }
// square();

// function addTwoNumbers() {
//   let numOne = 50;
//   let numTwo = 50;
//   let sum = numOne + numTwo;
//   console.log("Sum is: ", sum);
// }
// addTwoNumbers();

//function to print fullname

// function fullName() {
//   let firstName = "Vinal";
//   let lastName = "Pawar";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// fullName();

//Function returning value

// function fullName() {
//   let firstName = "Vinal";
//   let lastName = "Pawar";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// console.log(fullName());

// function addTwoNumbers() {
//   let numOne = 50;
//   let numTwo = 50;
//   let sum = numOne + numTwo;
//   return sum;
// }
// console.log(addTwoNumbers());

// function areaOfCircle(radius) {
//   let area = Math.PI * radius * radius;
//   return area;
// }

// console.log(areaOfCircle(10));

// function square(number) {
//   return number * number;
// }

// console.log(square(10));

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   console.log(sum);
// }
// sumTwoNumbers(10, 10);

// If a function doesn't return it doesn't store data, so it should return

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   return sum;
// }

// console.log(sumTwoNumbers(10, 10));

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("Vinal", "Pawar"));

// this function takes array as a parameter and sum up the numbers in the array

// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

// const areaOfCircle = (radius) => {
//   let area = Math.PI * radius * radius;
//   return area;
// };

// console.log(areaOfCircle(10));

function sumAllNums() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sumAllNums(10, 20, 30, 40));
