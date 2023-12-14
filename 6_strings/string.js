// const collectionOfWord = ["Hello", "World", ["in"], ["a"], ["frame"]];
// console.log(collectionOfWord[0]);

// const firstName = "Anshu Raj";
// const channel = "Do Some Coding";

// const channel = " Do Some Coding ";

// const message = 'Don't do this';
// Method 1
// const message = "Don't do this";
// Method 2
// const message = 'Don\'t do this';

// For creating new line
// const message = "This is best course on entire youtube. \nI am providing";
// console.log(message);

// For creating spacing
// const message =
//   "This is best course on entire youtube. \t \t \t \t I am providing";
// console.log(message);

// Template literals

// const name = "Anshu Raj";

// const message = "Hello Anshu how are you doing?";

// const greetings = (name) => {
//   console.log(`Hello ${name} how are you doing?`);
// };
// greetings("Anshu");

const channel = "Do Some Coding";

// Change string to Uppercase
// console.log(channel.toUpperCase());

// Change string to Lowercase
// console.log(channel.toLowerCase());

// Trim text from string
// const greeting = "   Hello world!   ";
// console.log(greeting.trim());

// Trim text from string end
// const greeting = "   Hello world!   ";
// console.log(greeting.trimEnd());

// Get length of String
// console.log(channel.length);

// Get character code at index
// console.log(channel.charCodeAt(1));

// Get character at index
// console.log(channel.charAt(13));

// Replace Coding with Learning
// console.log(channel.replace("Coding", "Learning"));
// console.log(channel.replaceAll("o", "e"));

// Split string into array

// console.log(channel.split(" ")[1]);
// console.log(channel.split("o"));

// Continate string "Do Some Coding" with "is fun"
// console.log(channel.concat(" is fun"));

// Get sub string from index 3 to 7
// console.log(channel.substring(3, 7));

// Check channel start with "Do"
// console.log(channel.startsWith("Do"));

// Check channel end with "ing"

// console.log(channel.endsWith("ing")); //  -> true

// Check channel includes "Some"

// console.log(channel.includes("Some")); //  -> true

// Get index of "Some"

// console.log(channel.indexOf("Some")); //  -> 3

// Get last index of "o"

// console.log(channel.lastIndexOf("o")); //  -> 11

// Search string
// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
// const regex = /\bDog\b/gi;

// console.log(paragraph.search(regex)); //  -> 40

// Match o in string
console.log(channel.match(/o/g));
