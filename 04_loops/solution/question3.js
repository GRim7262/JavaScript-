// Write table for 19 using loop
// for (let i = 1; i <= 190; i++) {
//   if (i % 19 === 0) console.log(i);
// }

//YT Approach

let num = parseInt(prompt("Enter table number"));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${i * num}`);
}
