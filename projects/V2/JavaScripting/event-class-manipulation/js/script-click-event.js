// ? ASSIGNMENT 1

// Get the button element
const button = document.querySelector("#btn-opg1");
let textElement = document.querySelector("#tekst-thing");

// Add a click event listener to the button
button.addEventListener("click", () => {
  console.log("Hello world");
  textElement.innerText = "Hello world";
});

// ? ASSIGNMENT 2

// Get the button element
const button2 = document.querySelector("#btn-opg2");
let alertText = "Press the text bellow";

let liElements = document.querySelectorAll("li");

// Add a click event listener to the button
button2.addEventListener("click", () => {
  alert(alertText);
});

liElements.forEach((liElement) => {
  liElement.addEventListener("click", () => {
    alert(liElement.innerText);
  });
});

// ? ASSIGNMENT 3

// Get the button element
const button3 = document.querySelector("#btn-opg3");
const squareOne = document.querySelector("#color-square");
var squareColor = "rgb(254, 165, 0)";

// Add a click event listener to the button
button3.addEventListener("click", () => {
  // Change the color of the square
  squareOne.style.backgroundColor = squareColor;
});

// ? ASSIGNMENT 4

// Get the button elements
const button4R = document.querySelector("#btn-opg4-r");
const button4G = document.querySelector("#btn-opg4-g");
const button4B = document.querySelector("#btn-opg4-b");
const button4Y = document.querySelector("#btn-opg4-y");

// Get body element (This is disgusting to look at)
// const affectedElement = document.querySelector("body");

// Get the square element
const affectedElement = document.querySelector("#color-square-2");

// Add a click event listener to the button
button4R.addEventListener("click", () => {
  // Change the color of the square
  affectedElement.style.backgroundColor = "red";
});

// Get all the button elements
const buttons = document.querySelectorAll("button");

button4R.addEventListener("click", () => {
  affectedElement.style.backgroundColor = "red";
});

button4G.addEventListener("click", () => {
  affectedElement.style.backgroundColor = "green";
});

button4B.addEventListener("click", () => {
  affectedElement.style.backgroundColor = "blue";
});

button4Y.addEventListener("click", () => {
  affectedElement.style.backgroundColor = "yellow";
});

// ? ASSIGNMENT 5

// Get the button elements
const button5Switch = document.querySelector("#btn-opg5-s");
const button5R = document.querySelector("#btn-opg5-r");
const button5G = document.querySelector("#btn-opg5-g");
const button5B = document.querySelector("#btn-opg5-b");
const button5Y = document.querySelector("#btn-opg5-y");

// Get the square element
const affectedElement5 = document.querySelector("#color-square-3");

// Add a click event listener to the button
button5Switch.addEventListener("click", () => {
  // Works like a switch
  if (affectedElement5.style.display === "none") {
    affectedElement5.style.display = "inline";
  } else {
    affectedElement5.style.display = "none";
  }
});

button5R.addEventListener("click", () => {
  // Change the color of the square
  affectedElement5.style.backgroundColor = "red";

  if (affectedElement5.style.display === "none") {
    affectedElement5.style.display = "inline";
  } else {
    affectedElement5.style.display = "none";
  }
});

button5G.addEventListener("click", () => {
  // Change the color of the square
  affectedElement5.style.backgroundColor = "green";

  if (affectedElement5.style.display === "none") {
    affectedElement5.style.display = "inline";
  } else {
    affectedElement5.style.display = "none";
  }
});

button5B.addEventListener("click", () => {
  // Change the color of the square
  affectedElement5.style.backgroundColor = "blue";

  if (affectedElement5.style.display === "none") {
    affectedElement5.style.display = "inline";
  } else {
    affectedElement5.style.display = "none";
  }
});

button5Y.addEventListener("click", () => {
  // Change the color of the square
  affectedElement5.style.backgroundColor = "yellow";

  if (affectedElement5.style.display === "none") {
    affectedElement5.style.display = "inline";
  } else {
    affectedElement5.style.display = "none";
  }
});
