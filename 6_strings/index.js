// const name = "Vinal";
// const channel = "Do Some Coding";

// const message = 'Don't do this'
//method 1
// const message = "Don't do this";
//method 2
// const message = "Don't do this";

// for creating new line inside string ->  " \n "
// const message =
//   " This is best course on entire youtube. \n I am providing Pratice Questions too ";

// for creating line break inside string ->  " \r "
// const message =
//   "This is best course on entire youtube. \r I am providing Pratice Questions too ";

// for creating space inside string => " \t "
// const message = " Subscribe \t this channel ";
// console.log(message);

//template literals
    // const name = "Vinal Pawar"

    // const message = "Hello Vinal, how are you doing?"

// const greetings = (name) => {
//     // console.log("Hello Vinal, how are you?");
//     // console.log("Hello " + name + ", how are you?");
//     console.log(`Hello ${name}, how are you?`);
// }
// greetings("Vinal")

// const channel = "Do Some Coding"
// console.log(channel.toLowerCase());

// const greetings = "  Hello World!  "
// console.log(greetings.trimEnd());

const channel = "Do Some Coding"
// console.log(channel.replace("o", "e"));
// console.log(channel.split(" ") [1]);
// console.log(channel + " is fun");
// console.log(channel.lastIndexOf("o"));

const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const regex = /\bDog/gi;
console.log(paragraph.match(regex));
