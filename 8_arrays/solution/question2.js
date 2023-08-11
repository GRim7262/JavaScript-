//Given a total due and an array representing the amount of change in your pocket.
// determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: ₹1 coin,  ₹2 coin, ₹5 coin, ₹10 coin
// changeEnough([25, 20, 5, 5], 120) should yield true

// since having 25 → ₹1 coin,  20 → ₹2 coin,  5 → ₹5 coin and 5 → ₹10 coin
// gives you 25 + 40 + 25 + 50 = 140
//Online Apprach
// const changeEnough = (arr, bill) => {
//   let oneCoin = arr[0] * 1;
//   let twoCoin = arr[1] * 2;
//   let fiveCoin = arr[2] * 5;
//   let tenCoin = arr[3] * 10;
//   if (oneCoin + twoCoin + fiveCoin + tenCoin >= bill) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(changeEnough([10, 6, 5, 2], 69));
// console.log(changeEnough([20, 10, 10, 5], 100));

const coins = [10, 6, 5, 2];
const amountNeedToPay = 69;

const enoughCoins = (coins, amount) => {
  const moneyArr = coins.map((value, i) => {
    if (i === 0) {
      return value;
    } else if (i === 1) {
      return value * 2;
    } else if (i === 2) {
      return value * 5;
    } else {
      return value * 10;
    }
  });
  const totalMoney = moneyArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  //   console.log("moneyArr", moneyArr);
  //   console.log("totalMoney", totalMoney);
  if (totalMoney >= amount) {
    return true;
  } else {
    return false;
  }
};
console.log(enoughCoins(coins, amountNeedToPay));
