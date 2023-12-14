// const height = 100;
// const width = 150;
// const area = height * width;
// console.log(`Area of ${height} & ${width} = ${area}`);

// const heightGlobal = 500;
// function calculateArea(heightValue = 1, widthValue = 1) {
//   //   console.log("height", heightValue, "width", widthValue);
//   const height = heightGlobal;
//   const width = widthValue;
//   const area = height * width;
//   return area;
// }
// console.log(height);
// const area1 = calculateArea(500, 600);
// console.log("Area", area1);

// const login = function (username, password) {
//   console.log("username", username, "Password", password);
// };
// login("Vinal", "Pawar");

// In callback function, function is used as parameter of other function

// function printMessage(message, callback) {
//   console.log(message);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// printMessage("Hello", sayGoodbye);

// using anonymous function
// printMessage("Hello", () => console.log("Hello World "));
// printMessage("Anonymous", function () {
//   console.log("This is from anonymous function");
// });

// (function () {
//   console.log("This is auto");
// })();

// function normalFunction () {

// }
const calculateArea = (height, width) => {
  return height * width;
};

const calculateArea1 = (height, width) => height * width;

const area1 = calculateArea(100, 200);
console.log("Area", area1);
