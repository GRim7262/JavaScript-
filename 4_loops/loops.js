// without loops
// print 1 - 10 number on console

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// using loops
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//While Loop

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//Do-While Loop

// let i = 12;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Syntax
// for ([initialization];[condition];[final-expression]){
//     // Block of code
//  }

//For Loop

//Write table for 19 using loop
// for (let i = 1; i <= 190; i++) {
//   if (i % 19 === 0) console.log(i);
// }

for (let i = 1; i <= 1000; i++) {
  if (i % 5 === 0) {
    if (i === 20) {
      continue;
    }
    console.log("Print i", i);
  }
  if (i > 50) {
    break;
  }
}
