// Loop in array
// const courses = ["HTML", "CSS", "Javascript"];
// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

// Array.forEach()
// function func() {
//   const items = [12, 24, 36];
//   const copy = [];
//   items.forEach((item) => {
//     copy.push(item + item + 2);
//   });
//   console.log(copy);
// }
// func();

// const func = () => {
//   const items = [1, 29, 47];
//   const copy = [];
//   items.forEach((item) => {
//     copy.push(item * item);
//   });
//   console.log(copy);
// };
// func();

// const courses = ["HTML", "CSS", "Javascript"];
// courses.forEach(myfunc);
// function myfunc(elements) {
//   console.log(elements);
// }

// const courses = ["HTML", "CSS", "Javascript"];
// console.log("Original Array: ", courses);
// courses.push("React", "Node");
// console.log("Array after adding an element: ", courses);

// console.log("Original Array: ", courses);
// courses[courses.length] = "React";
// console.log("Array after adding an element: ", courses);

// console.log(typeof courses);

// console.log("Using Array.isArray() method: ", Array.isArray(courses));
// console.log("Using instanceof method: ", courses instanceof Array);

// const numbers = [5];
// const numbers = new Array(5);
// console.log(numbers);

//  we are getting the length of the given array.
// const array = () => {
//   let colors = ["green", "blue", "red", "yellow", "black", "white"];
//   console.log(colors.length);
// };
// array();

// This method helps to convert the given value into the string.
// const func = () => {
//   let arr = ["Geeks", "for", "Geeks"];
//   console.log(arr);

//   let str = arr.toString(arr);
//   console.log(str);
// };
// func();

// This method helps to join two arrays as a string. If we pass any parameter to this method it will join the array by using that parameter.
// const func = () => {
//   let a = [1, 2, 3, 4, 5, 6];
//   console.log(a.join("|"));
// };
// func();

// The delete operator used to delete the given value that can be object, array or anything.
// let emp = {
//   firstName: "Raj",
//   lastName: "Kumar",
//   salary: 40000,
// };

// delete emp.salary;
// console.log(emp);

// The concat() method is used to concatinate the two arrays and it gives the mergerd array.
// const func = () => {
//   let num1 = [11, 12, 13],
//     num2 = [14, 15, 16],
//     num3 = [17, 18, 19];
//   console.log(num1.concat(num2, num3));
// };
// func();

// The Array flat() method is used to flattend the array that means it merge all the given array and reduce all the nesting present in it.
// const numbers = [
//   ["1", "2"],
//   ["3", "4", ["5", ["6"], "7"]],
// ];
// const flatNumbers = numbers.flat(3);
// console.log(flatNumbers);

// Adding Element at the end of an Array. As arrays in JavaScript are mutable objects, we can easily add or remove elements from the Array. And it dynamically changes as we modify the elements from the array.
// let number_arr = [10, 20, 30, 40, 50];
// let string_arr = ["piyush", "gourav", "smruti", "ritu"];

// number_arr.push(60);
// number_arr.push(70, 80, 90);

// string_arr.push("sumit", "amit");

// console.log("After push op ");
// console.log(number_arr);

// console.log("After push op ");
// console.log(string_arr);

// This method is used to add elements to the front of an Array.
// let number_arr = [20, 30, 40];
// let string_arr = ["amit", "sumit"];

// number_arr.unshift(10, 20);

// string_arr.unshift("Sunil", "anil");

// console.log("After unshift op ");
// console.log(number_arr);
// console.log("After unshift op ");
// console.log(string_arr);

// This method is used to remove elements from the end of an array.
// let number_arr = [20, 30, 40, 50];
// let string_arr = ["amit", "sumit", "anil"];

// number_arr.pop();
// string_arr.pop();

// console.log("After pop op ");
// console.log(number_arr);
// console.log("After pop op ");
// console.log(string_arr);

// This method is used to remove elements from the beginning of an array

// let number_arr = [20, 30, 40, 50, 60];
// let string_arr = ["amit", "sumit", "anil", "prateek"];

// number_arr.shift();
// string_arr.shift();

// console.log("After shift op ");
// console.log(number_arr);
// console.log("After shift op ");
// console.log(string_arr);

// This method is used for the Insertion and Removal of elements in between an Array
// let number_arr = [20, 30, 40, 50, 60];
// let string_arr = ["amit", "sumit", "anil", "prateek"];

// number_arr.splice(1, 3);
// number_arr.splice(1, 0, 3, 4, 5);
// string_arr.splice(1, 2, "xyz", "geek 1", "geek 2");
// console.log("After splice op ");
// console.log(number_arr);
// console.log("After splice op ");
// console.log(string_arr);

// This method returns a new array containing a portion of the original array, based on the start and end index provided as arguments
const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
// const case1 = originalArr.slice(0, 3);
// console.log(`Case 1: Extract the first 3 elements of the array: [${case1}]`);

// Case 2: Extract the last 3 elements of the array
// const case2 = originalArr.slice(-3);
// console.log(`Case 1: Extract the first 3 elements of the array: [${case2}]`);

// Case 3: Extract elements from the middle of the array
// const case3 = originalArr.slice(3, 7);
// console.log(`Case 3: Extract elements from
// the middle of the array: [${case3}]`);

// Case 4: Start index is greater than end index
// const case4 = originalArr.slice(5, 2);
// console.log(`Case 4: Start index is greater
// than end index: [${case4}]`);

// Case 5: Negative start index
// const case5 = originalArr.slice(-4, 9);
// console.log(`Case 5: Negative startindex: [${case5}]`);

// Case 6: Negative end index
// const case6 = originalArr.slice(3, -2);
// console.log(`Case 6: Negative startindex: [${case6}]`);

// Case 7: Only start index is provided
// const case7 = originalArr.slice(5);
// console.log(`Case 7: Only start index is
// provided: [${case7}]`);

// Case 8: Start index and end index are out of range
// const case8 = originalArr.slice(15, 20);
// console.log(`Case 8: Start index and end
// index are out of range: [${case8}]`);

// Case 9: Start index and end index
// are negative and out of range
const case9 = originalArr.slice(-15, -10);
console.log(`Case 9: Start index and end index
 are negative and out of range: [${case9}]`);
