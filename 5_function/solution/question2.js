// Create a function that calculate area of circle
// Function name should be calcAreaOfCicle()
// create another function calcSquare()
// Pass calcAreaOfCicle function as callback of calcSqaure
// like - calcSqaure(calcAreaOfCircle)
// store value of calculated value in result
//  like - result = calcSqaure(calcAreaOfCircle)
// then print result;

const calcAreaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};

console.log("Area Of Circle ", calcAreaOfCircle(8));

const calcSqaure = (calcArea, radius) => {
  const areaOfCircle = calcArea(radius);
  return areaOfCircle * areaOfCircle;
};

const result = calcSqaure(calcAreaOfCircle, 8);
console.log("Result ", result);
