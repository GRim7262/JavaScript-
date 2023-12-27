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
// const footerNewText = "This is new text";
// const heading = document.createElement("h1");
// const text = document.createTextNode("I am base");
// const text1 = document.createTextNode("Hi, Guys");
// heading.append(text);
// heading.prepend(text1);
// const footer = document.getElementsByTagName("footer")[0];
// footer.append(heading);
// footer.before(heading);
// footer.after(heading);
// footer.replaceWith(footerNewText);
// document.getElementsByTagName("nav")[0].remove();
// console.log(heading);

// const listItems = document.getElementsByTagName("li");

// console.log(listItems[0].classList.remove("active"));
// console.log(listItems[0].classList.add("active"));
// listItems[0].classList.toggle("active");

// const manyHtmlCode = `<nav class="common">
// <ul>
//   <li class="active demo">Home</li>
//   <li>About</li>
//   <li>Dashboard</li>
// </ul>
// </nav>`;
// document.querySelector("footer").innerHTML = manyHtmlCode;
// document.querySelector("footer").innerText = manyHtmlCode;
// document.querySelector("footer").outerHTML = manyHtmlCode;

// EVENTS

// const alertMe = (e) => {
//   console.log(e.getAttribute("id"));
//   alert("You are doing wrong");
// };

// const changeBtnEl = document.getElementById("changeBtn");

// const random = (number) => Math.floor(Math.random() * (number + 1));

// const forChaingeingColor = (event) => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// };

// changeBtnEl.addEventListener("click", forChaingeingColor);
// changeBtnEl.removeEventListener("click", forChaingeingColor);
