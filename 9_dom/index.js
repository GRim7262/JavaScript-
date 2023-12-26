// HOW TO ACCESS NODES IN DOM
// console.log(document.body.parentNode);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1].childNodes[1].childNodes[1]);

// HOW TO ACCESS ELEMENT NODES
// console.log(document.body.children[1].previousElementSibling);

// HOW TO ACCESS ELEMENT USING ID
// console.log(document.getElementById("nav"));

// HOW TO ACCESS ELEMENT USING CLASS
// console.log(document.getElementsByClassName("common"));

// HOW TO ACCESS ELEMENT USING NAME
// console.log(document.getElementsByName("sample")[0]);

// HOW TO ACCESS ELEMENT USING TAGNAME
// console.log(document.getElementsByTagName("footer"));

// QUERY SELECTOR
// console.log(document.querySelector("#nav"));
// console.log(document.querySelector(".common"));
// console.log(document.querySelectorAll("h1[ name = sample ]"));
// console.log(document.querySelector("footer"));

// CONVERT OBJECT TO ARRAY
// const commonElements = document.querySelectorAll(".common");
// for (let common of commonElements) {
//   console.log(common);
// }

// const convertedCommonElements = Array.from(commonElements);

// const commonElements = document.querySelectorAll("ul > li:last-child");
// console.log(commonElements[0].innerHTML);

// const attributeValue = document.getElementById("nav").getAttribute("style");
// document.getElementById("nav").setAttribute("data-random", 5);
// // document.getElementById("nav").removeAttribute("data-random");
// console.log(document.getElementById("nav").dataset.new);
const footerNewText = "This is new text";
const heading = document.createElement("h1");
const text = document.createTextNode("I am base");
const text1 = document.createTextNode("Hi, Guys");
heading.append(text);
heading.prepend(text1);
const footer = document.getElementsByTagName("footer")[0];
// footer.append(heading);
// footer.before(heading);
// footer.after(heading);
footer.replaceWith(footerNewText);
document.getElementsByTagName("nav")[0].remove();
console.log(heading);
