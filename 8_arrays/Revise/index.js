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

const courses = ["HTML", "CSS", "Javascript"];
// console.log("Original Array: ", courses);
// courses.push("React", "Node");
// console.log("Array after adding an element: ", courses);

console.log("Original Array: ", courses);
courses[courses.length] = "React";
console.log("Array after adding an element: ", courses);
