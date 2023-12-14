/*const height = 100;
const width = 150;
area = height * width;
console.log("Area: ", area);
const height1 = 200;
const width1 = 150;
area1 = height1 * width1;
console.log("Area: ", area1);*/

// const heightGlobal = 500;
// function calculateArea(heightValue = 1, widthValue = 1) {
//   const height = heightGlobal;
//   const width = widthValue;
//   area = height * width;
//   //   console.log("Area: ", area);
//   return area;
// }

// console.log("Height: ", heightGlobal);

// const area1 = calculateArea(500, 600);
// console.log("Area = ", area1);

// const login = function (username, password) {
//   console.log("Username:", username);
// };
// login("Anshu");

// function printMessage(message, callback) {
//   console.log(message);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// printMessage("Hello", sayGoodbye);

// // using anonymous function
// printMessage("anonymous", function () {
//   console.log("This is from anonymous");
// });

// (function () {
//   console.log("This is auto");
// })();

// function normalFunction() {}
const calculateArea = (height, width) => {
  return height * width;
};
const calculateArea1 = (height, width) => height * width;

const area1 = calculateArea1(55, 55);
console.log("Area: ", area1);
