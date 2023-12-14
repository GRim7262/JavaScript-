// 1 Perform Network Request

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Using Async And Await Syntax

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   return data;
// }

// async function asyncFetchData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// asyncFetchData();

// YT approach

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    return new Error(error);
  }
}
getPosts();

// class Animal {
//   constructor(name, legCount, speak) {
//     this.name = name;
//     this.legCount = legCount;
//     this.speak = speak;
//   }

//   speaks() {
//     console.log("hi there" + this.speak);
//   }
// }

// let dog = new Animal("dog", 4, "Bhow Bhow");
// dog.speaks();
