// Synchronous Programming

// console.log("Get");
// console.log("Set");
// console.log("Ready");
// console.log("Go");

// Asynchronous Programming

// console.log("Get");
// setTimeout(() => {
//   console.log("Set");
// }, 2000);
// console.log("Ready");
// console.log("Go");

// Callback

// const logGet = () => {
//   console.log("Get");
// };
// logGet();

// const logSet = (callback) => {
//   setTimeout(() => {
//     console.log("Set");
//     callback();
//   }, 2000);
// };

// const logReadyAndGo = () => {
//   console.log("Ready");
//   console.log("Go");
// };

// logSet(logReadyAndGo);

// const fetchData = (callback) => {
//   setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     callback(data);
//   }, 2000);
// };

// const processData = (data) => {
//   console.log(data.map((item) => item * 2));
// };
// fetchData(processData); // Pass processData function as a callback

// Callback hell
// getData((error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     processData(data, (error, processedData) => {
//       if (error) {
//         console.error(error);
//       } else {
//         saveData(processedData, (error) => {
//           if (error) {
//             console.error(error);
//           } else {
//             console.log("Data saved successfully!");
//           }
//         });
//       }
//     });
//   }
// });

// Promise

//Pending -> Starting stage
//Fulfilled -> Promise Resolved
//Rejected -> Promise Rejected

// const channel = new Promise((resolve, reject) => {
//   const isError = true;

//   if (isError) {
//     reject("Something went wrong");
//   } else {
//     resolve("Anshu Opinion");
//   }
// });

// How to handle resolve and reject
// channel
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// How to use promises

// const logGet = () => {
//   console.log("Get");
// };
// logGet();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set");
//     resolve();
//   }, 2000);
// });

// promise
//   .then(() => {
//     logReadyAndGo();
//   })
//   .catch(() => {
//     console.log("this is error");
//   });

// const logReadyAndGo = () => {
//   console.log("Ready");
//   console.log("Go");
// };

// Multiple Promises + Chaining

// const fetchData = new Promise((resolve, reject) => {
//   //   resolve([1, 2, 3, 4]);
//   reject(new Error("i am error"));
// });

// fetchData
//   .then((data) => {
//     console.log("then 1", data);
//     return data.map((value) => value * 2);
//   })
//   .then((data) => {
//     console.log("then 2", data);
//     return data.map((value) => value - 1);
//   })
//   .then((data) => {
//     console.log("then 3", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise finished executing!");
//   });

// const p1 = Promise.reject("I will always trigger catch block");
// const p2 = Promise.reject("I will always trigger then block");
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 3 success");
//   }, 4000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 4 success");
//   }, 2000);
// });

// Promise.all
// const promises = Promise.all([p1, p2, p3]);
// console.log(
//   promises
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// );

// Promise allSettled

// const promises = Promise.allSettled([p1, p2, p3]);
// console.log(
//   promises.then((data) => {
//     console.log(data);
//   })
// );

// Promise Race

// const promises = Promise.race([p3, p4]);

// promises
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// Promise Any

// const promises = Promise.any([p1, p2, p3, p4]);

// promises
//   .then((data) => {
//     console.log("then block");
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// Async & Await

// const channelName = new Promise((resolve, reject) => {
//   const isError = true;
//   if (isError) {
//     reject("Something went wrong");
//   } else {
//     resolve("Anshu Opinion");
//   }
// });

// channelName
//   .then((channel) => {
//     console.log(channel);
//   })
//   .catch((error) => {
//     console.log("Old Promise error");
//     console.log(error);
//   });

// Old way to declare async
// async function channelNameAsync() {
//   return "Do Some Coding";
// }

// const channelNameAsync = async () => {
//   return "error case";
// };

// channelNameAsync()
//   .then((channel) => {
//     console.log("async");
//     console.log(channel);
//   })
//   .catch((error) => {
//     console.log("async error");
//     console.log(error);
//   });

// Await

// const fetchData = new Promise((resolve, reject) => {
//   const error = true;
//   if (error) {
//     reject("Some error");
//   }

//   setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     resolve(data);
//   }, 2000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Await example

const fetchDataAsync = async () => {
  const error = true;
  if (error) {
    throw new SyntaxError("Hello this is error");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 2000);
  });
};

async function processedData() {
  try {
    const data = await fetchDataAsync();

    try {
      const data = await fetchDataAsync();
      console.log(data);
    } catch (error) {
      console.error(error.name);
    }

    console.log(data);
  } catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  } finally {
    console.log("I will triggger everytime");
  }
}

processedData();
