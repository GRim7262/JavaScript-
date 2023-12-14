// const users = '{"name": "harkirat","age":"24","gender":"male"}';
// console.log(users["0"]);
// const user = JSON.parse(users);
// console.log(user["gender"]);

const user = {
  name: "harkirat",
  gender: "male",
};

const finalString = JSON.stringify(user);
console.log(finalString);
