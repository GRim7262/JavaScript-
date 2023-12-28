// console.log(window.alert("I am Window"));
// console.log(alert("I am Window");

// SET TIMEOUT

// const message = () => {
//   console.log("Hello World!");
// };

// const timeOut = setTimeout(message, 3000);

// clearTimeout(timeOut);

// const intervel = setInterval(message, 500);
// setTimeout(() => {
//   clearInterval(intervel);
// }, 10000);

// DIALOG METHOD

// alert("This is message");

// const inputValue = prompt("Enter any input: ");
// console.log(inputValue);

// const isConfirm = confirm("Are you a developer ?");
// console.log(isConfirm);

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.port);

// CONSOLE LOG METHODS

// const users = {
//   name: "Anshu Raj",
//   channel: "Do Some Coding",
//   work: "Developer",
// };
// console.table(users);

// const colors = ["orange", "green", "red"];
// console.table(colors);

console.time("Function Timing: ");

const timeRun = () => {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
};
timeRun();
console.timeEnd("Function Timing: ");
