// Objects
// Two methods for creating objects
// const student = {};
// const student = new object();

// const student = {
//   roll: 30,
//   firstName: "Vinal",
//   lastName: "Pawar",
//   class: 12,
// };

// How to access objects

// const fullName = student.firstName + " " + student.lastName;
// console.log(fullName);

// How to create and update values in objects
// student.weight = "65 kg";
// student["roll"] = "50";
// console.log(student);

// const aadharCardData = {
//   firstName: "Anshu",
//   lastName: "Raj",
//   dob: "01-01-2000",
//   aadharNo: 479382749328749,
//   address: { village: "xyz", district: "ranchi", state: "jharkhand" },
//   normalArray: ["45", "45"],
//   getFullName: function () {
//     //this = aadharCardData
//     return this.firstName + "" + this.lastName;
//   },
//   getAadharNo: function () {
//     //this = aadharCardData
//     return this.aadharNo;
//   },
// };

// const village = aadharCardData.address.village;
// console.log(village);
// console.log(aadharCardData.getFullName());
// console.log(aadharCardData.getAadharNo());

// Constructor Function
// It start with capital letter

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.getFullName = function () {
//     return this.firstName + "" + this.lastName + this.age;
//   };
// }

// When we create objects using constructor function then we need to use new keyword before it
// const person1 = new Person("Vinal", "Pawar", 23);
// console.log(person1.getFullName());
// console.log(student);

// How to duplicate objects

// const obj1 = { title: "obj1" };
// const obj2 = obj1;

// obj2.title = "obj2";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// Spread Operator

// const obj1 = { title: "obj1" };
// const obj2 = { ...obj1 };

// obj2.title = "obj2";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

const student = {
  roll: 30,
  firstName: "Vinal",
  lastName: "Pawar",
  class: 12,
};

console.log(student.hasOwnProperty("rboll"));

// for in loop

// for (let key in student) {
//   console.log(key);
// }

// console.log(Object.entries(student));

// Structure of map
// [
//   ["roll", 55]
//   ["firstName", "Vinal"]
//   ["lastName", "Pawar"]
// ];

// for (let [key, value] of Object.entries(student)) {
//   console.log("key", key);
//   console.log("value", value);
// }
