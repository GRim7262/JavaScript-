const pin = 1234;
const enter = "Enter your pin: ";
const correctPin = "That was correct";
const wrongPin = "Sorry that was wrong.";
const maxAttempt = 4;
let firstAttempt = 1;

for (let i = 1; i <= maxAttempt; i++) {
  const userInput = parseInt(
    prompt(
      ` Enter your pin \n Attempts remaining: ${maxAttempt - firstAttempt}  `
    )
  );
  if (userInput === pin) {
    alert(correctPin);
    break;
  } else {
    alert(wrongPin);
  }
  firstAttempt++;
}
