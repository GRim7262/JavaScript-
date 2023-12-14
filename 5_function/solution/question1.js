// Print 15 , 16 , 17 tables using function
// Function name should be generateTable()

const generateTable = (tableValue) => {
  for (let i = 1; i <= 10; i++) {
    console.log(tableValue + " X " + i + " = " + i * tableValue);
  }
};

const tableNumber = parseInt(prompt("Enter table number"));
generateTable(tableNumber);
