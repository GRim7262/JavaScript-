const os = require("os");
// console.log(os.freemem());
// console.log(os.userInfo());

const obj = {
  type: os.type(),
  user: os.userInfo(),
  release: os.release(),
};

console.log(obj.type);
