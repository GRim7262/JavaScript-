// Example of Objects

// const rollString = "roll";
// const student = {
//   roll: 55,
//   firstName: "Rohan",
//   lastName: "Raj",
//   class: 12,
// };

// How to access objects 1st way
// const roll = student["roll"];
// console.log(roll);

// 2nd way
// const fullName = student.firstName + " " + student.lastName;
// console.log(fullName);

// const roll = student[rollString];
// console.log(roll);

// How to create and update values in objects

// student.weight = "50kg";
// student["roll"] = 50;
// console.log(student);

// const addharCardData = {
//   firstName: "Anshu",
//   lastName: "Raj",
//   dob: "01-01-2000",
//   adharNo: 479382749328749,
//   address: { village: "xyz", district: "ranchi", state: "jharkhand" },
//   normalArray: ["45", "45"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName} ${this.dob}`;
//   },
// };

// Tthis === aadharCardData
// const village = addharCardData.address.village;

// console.log(addharCardData.getFullName());

// Constructor Function
//In JavaScript, constructor functions are a way to create objects. One convention is that constructor functions should start with a capital letter. This is not a strict rule enforced by the language itself, but it is a widely followed naming convention in the JavaScript community to distinguish constructor functions from regular functions or variables.

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

//   this.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// // constructor function starts with new keyword
// const person1 = new Person("Anshu", "Raj", 95);
// const person2 = new Person("Anshu2", "Raj", 95);
// console.log(person1.getFullName());

// How to duplicate object

// const obj1 = { title: "obj1" };
// const obj2 = obj1;

// obj2.title = "obj2";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// what is reference data type ?
/* Answer : Reference data type is a data type that holds a
reference to an object in memory, rather than holding its value directly */

// Spread Operators
// you can use the spread operator (...) to create a shallow copy of an object or an array. However, if the object contains nested objects or arrays, a shallow copy may still hold references to those nested structures. To create a deep copy and avoid references to nested structures, you need to recursively apply the spread operator.

// const obj1 = { title: "obj1" };
// const obj2 = { ...obj1 };

// obj2.title = "obj2";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// How to loop over Objects

const student = {
  roll: 55,
  firstName: "Rohan",
  lastName: "Raj",
  class: 12,
};

// for (let key in student) {
//   console.log(key);
// }

// console.log(Object.entries(student));

// for (let [key, value] of Object.entries(student)) {
//   console.log("Key", key);
//   console.log("Value", value);
// }

// Convert map data type to object

// const entries = new Map([
//   ["foo", "bar"],
//   ["baz", 43],
// ]);

// const obj = Object.fromEntries(entries);
// console.log(obj);

// Convert object key into array

// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object1));

// Convert object value into array

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

// console.log(Object.values(object1));

// Check key exist or not

object1.property1 = 42;
console.log(object1.hasOwnProperty("property1"));
console.log(object1.hasOwnProperty("toString"));
