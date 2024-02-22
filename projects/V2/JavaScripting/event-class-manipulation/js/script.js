// Get the button element
const button = document.querySelector("button");
let textElement = document.querySelector("#tekst-thing");

// Add a click event listener to the button
button.addEventListener("click", () => {
  console.log("Hello world");
  textElement.innerText = "Hello world";
});
