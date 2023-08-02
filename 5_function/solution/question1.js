// Question 1
// Print 15 , 16 , 17 tables using function
// Function name should be generateTable()

// function generateTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     console.log(`${num} x ${i} = ${i * result}`);
//   }
// }
// generateTable(15);
// console.log("----------------");
// generateTable(16);
// console.log("----------------");
// generateTable(17);

//YT Approach

const generateTable = (tableValue, times) => {
  for (let i = 1; i <= times; i++) {
    console.log(`${tableValue} x ${i} = ${i * tableValue}`);
  }
};
const tableNumber = parseInt(prompt("Enter table number: "));
generateTable(tableNumber, 50);
