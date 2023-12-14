// const uptoNumber = 60;

// for (let i = 0; i <= uptoNumber; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/******************************************************/

// const inputNumber = 4;
// let result = 1;
// for (let i = 1; i <= inputNumber; i++) {
//   result *= i;
// }
// console.log(`factorial of ${inputNumber} = ${result}`);

/******************************************************/

// const tableNumber = parseInt(prompt(`Enter a number to print it's table `));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tableNumber} X ${i} = ${tableNumber * i}`);
// }

/******************************************************/
const defaultPin = 1234;
const guessMessage = "Please make your guess: ";
const wrongMessage = "Sorry that was wrong.";
const correctMessage = "That was correct!";
const maxAttempt = 4;
let currentAttempt = 1;

for (i = 1; i <= maxAttempt; i++) {
  const userInput = parseInt(
    prompt(
      `Attempt Remaining: ${maxAttempt - currentAttempt} \n ${guessMessage}`
    )
  );
  if (userInput === defaultPin) {
    alert(correctMessage);
    break;
  } else {
    alert(wrongMessage);
  }
  currentAttempt++;
}
