// Given a number n Calculate the factorial of the number

const num = 4;
let result = 1;

for (let i = 1; i <= num; i++) {
  result = result * i;
}

console.log("The factorial of " + num + " is:", result);
