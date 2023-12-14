// Using Switch Statement Check number is divisible by 5 and 15

const num = 75;
switch (true) {
  case num % 5 === 0 && num % 15 === 0:
    console.log(num, "Number is divisible by 5 and 15");
    break;
  default:
    console.log(num, "Number is not divisible by 5 and 15");
    break;
}
