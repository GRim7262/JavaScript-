// Question 2
// Create a function that calculate area of circle
// Function name should be calcAreaOfCicle()
// create another function calcSquare()
// Pass calcAreaOfCicle function as callback of calcSqaure
// like - calcSqaure(calcAreaOfCircle)
// store value of calculated value in result
//  like - result = calcSqaure(calcAreaOfCircle)
// then print result;

//My Approach
const calcAreaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};

console.log("Area of circle: ", calcAreaOfCircle(8));

const calcSquare = (calcAreaOfCicle, radius) => {
  const areaOfCircle = calcAreaOfCicle(radius);
  return areaOfCircle * areaOfCircle;
};

const result = calcSquare(calcAreaOfCircle, 8);
console.log("Result", result);

//YT Approach
// const calcAreaOfCircle = (radius) => {
//   return Math.PI * radius * radius;
// };

// console.log("Area of circle", calcAreaOfCircle(8));

// const calcSquare = (functionCalculateArea, radius) => {
//   const areaOfCircle = functionCalculateArea(radius);
//   return areaOfCircle * areaOfCircle;
// };

// const result = calcSquare(calcAreaOfCircle, 8);
// console.log("Result", result);
