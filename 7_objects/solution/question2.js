// Define a constant 'amount' with a value of 10000
const amount = 10000;
// Define a function 'percentageOfAmount' to calculate a percentage of a given amount
const percentageOfAmount = (amount, percentage) => {
  // Return the result of multiplying the amount by the percentage and dividing by 100
  return (amount * percentage) / 100;
};

// Define a function 'fiftyThirtyTwenty' to calculate and return the allocation percentages
const fiftyThirtyTwenty = (amount) => {
  return {
    // Calculate the amount for 'Needs' (50% of the given amount)
    Needs: percentageOfAmount(amount, 50),
    // Calculate the amount for 'Wants' (30% of the given amount)
    Wants: percentageOfAmount(amount, 30),
    // Calculate the amount for 'Saving' (20% of the given amount)
    Saving: percentageOfAmount(amount, 20),
  };
};

// Print the result of 'fiftyThirtyTwenty' function for the given 'amount' to the console
console.log(fiftyThirtyTwenty(amount));
