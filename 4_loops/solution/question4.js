/*Write a program that will allow someone to guess a four digit pin exactly 4 times.
  If the user guesses the number correctly. 
  It prints “That was correct!” Otherwise it will print “Sorry that was wrong.”
  Program stops after the 4th attempt of if they got it right.*/

const defaultPin = 2580;
const makeGuess = "Please make your guess: ";
const correctMessage = "You are correct!";
const wrongMessage = "Sorry that was wrong.";
const maxAttempt = 4;
let currentAttempt = 1;

for (let i = 1; i <= maxAttempt; i++) {
  const userInput = parseInt(
    prompt(
      `"Attempt Remaining: " ${maxAttempt - currentAttempt} \n ${makeGuess}`
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
