// Given a total due and an array representing the amount of change in your pocket.
// determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: ₹1 coin,  ₹2 coin, ₹5 coin, ₹10 coin
// changeEnough([25, 20, 5, 5], 120) should yield true
// @helen_yu

// since having 25 → ₹1 coin,  20 → ₹2 coin,  5 → ₹5 coin and 5 → ₹10 coin
// gives you 25 + 40 + 25 + 50 = 140

// Define an array of coin denominations.
const coins = [10, 6, 5, 2];
// Specify the amount that needs to be paid.
const amtNeedToPay = 69;
// Define a function to check if the total value of coins is enough to cover the amount needed.
const enoughCoin = (coins) => {
  // Calculate the total value of coins based on their denominations and check if the total value is greater than the amount needed.
  return coins[0] + coins[1] * 2 + coins[2] * 5 + coins[3] * 10 > amtNeedToPay;
};
console.log(enoughCoin(coins));

// const enoughCoin = (coins, amt) => {
//     const moneyArr = coins.map((value, i) => {
//       if (i === 0) {
//         return value;
//       } else if (i === 1) {
//         return value * 2;
//       } else if (i === 2) {
//         return value * 5;
//       } else {
//         return value * 10;
//       }
//     });
//     const totalMoney = moneyArr.reduce((prev, curr) => prev + curr, 0);
//     console.log("moneyArr", moneyArr);
//     console.log("totalMoney", totalMoney);
//     if (totalMoney >= amtNeedToPay) {
//       return true;
//     } else {
//       return false;
//     }
//   };
