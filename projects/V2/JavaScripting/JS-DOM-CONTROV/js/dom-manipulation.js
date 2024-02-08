// ? Assignment 1

// Get the menu by ID
let menu = document.querySelector("#menu");
console.dir(menu);

// ? Assignment 2

// Gets every element in the menu by the class name "active"
let activeElement = menu.querySelectorAll(".active");

// Writes it to the console
console.dir(activeElement);

// ? Assignment 3

// Gets every element with the tag "h1"
let everyH1 = document.querySelectorAll("h1");
console.dir(everyH1);

// ? Assignment 4

// Gets all the p elements on the page
let everyP = document.querySelectorAll("p");
console.dir(everyP);

// ? Assignment 5

// Gets every img element on the page
let everyImg = document.querySelectorAll("img");

// Loops through every img element, and sets the alt attribute to "Billedet er underlagt copyright"
for (let i = 0; i < everyImg.length; i++) {
  everyImg.item(i).setAttribute("alt", "Billedet er underlagt copyright");
}

console.dir(everyImg);

// ? Assignment 6

everyH1.item(0).textContent = "Overskriften er udskiftet";
console.dir(everyH1);

// ? Assignment 7

for (let i = 0; i < everyH1.length; i++) {
  everyH1.item(i).setAttribute("class", ".title");
}

console.dir(everyH1);

// ? Assignment 8

let everyLi = document.querySelectorAll("li");

console.dir(everyLi);

// ? Assignment 9

let everyElementWithIdPlayground = document.querySelectorAll("#playground");
console.dir(everyElementWithIdPlayground);

// Create an unordered list with three items, and adds it to the element with the playground ID
let ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  let text = document.createTextNode("Item " + (i + 1));
  li.appendChild(text);
  ul.appendChild(li);
}

everyElementWithIdPlayground.item(0).appendChild(ul);

// ? Assignment 10

let imgSrc = [
  everyImg.item(0).getAttribute("src"),
  everyImg.item(1).getAttribute("src"),
];

imgSrc.reverse();

console.dir(imgSrc);

for (let i = 0; i < everyImg.length; i++) {
  everyImg.item(i).setAttribute("src", imgSrc[i]);
}

// ? Assignment 11

let elementWithDeleteMeID = document.querySelectorAll("#deleteme");
let elementWithDeleteMeTooID = document.querySelectorAll("#deletemetoo");

elementWithDeleteMeID.item(0).remove();
elementWithDeleteMeTooID.item(0).remove();

// ? Assignment 12 (EXTRA)

everyElementWithIdPlayground.item(0).style.minHeight = "auto";
