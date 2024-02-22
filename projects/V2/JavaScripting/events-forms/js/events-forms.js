// ? Assignment 1

// Get the button
const button1 = document.querySelector("#btn-opg1");
const textResult = document.querySelector("#tekst-thing");

// Get the input fields

// Add event listener
button1.addEventListener("click", function () {
  // If they're outside of the function the value of the input fields are not updated
  let firstName = document.querySelector("#input-firstname").value;
  let lastName = document.querySelector("#input-lastname").value;
  let combinedString = "Hello  " + firstName + " " + lastName;

  // Checks if the input fields are empty, null, or empty strings
  if (
    firstName === "" ||
    lastName === "" ||
    firstName === null ||
    lastName === null ||
    !isNaN(firstName) ||
    !isNaN(lastName || lastName)
  ) {
    alert("Please fill in all fields");
    textResult.innerText = "Please fill in all fields";
    return;
  } else {
    alert(combinedString);
    textResult.innerText = combinedString;
    return;
  }
});

// ? Assignment 2

const button2 = document.querySelector("#btn-opg2");
const textResult2 = document.querySelector("#tekst-thing-2");

button2.addEventListener("click", function () {
  let number1 = Number(document.querySelector("#input-number-one").value);
  let number2 = Number(document.querySelector("#input-number-two").value);
  let result = number1 + number2;

  // TODO: Check error handling, m'kay
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please fill in all fields with numbers");
    textResult2.innerText = "Please fill in all fields with numbers";
    return;
  } else {
    alert(result);
    textResult2.innerText = result;
    return;
  }
});

// Assignment 3

const button3 = document.querySelector("#btn-opg3");
const textResult3 = document.querySelector("#tekst-thing-3");

button3.addEventListener("click", function () {
  let price = Number(document.querySelector("#input-price").value);
  let resultForm = document.querySelector("#input-price-result");
  let result = "Result: " + (price * 1.25).toFixed(2) * 0.9 + " DKK";

  if (isNaN(price)) {
    alert("Please fill in all fields with numbers");
    textResult3.innerText = "Please fill in all fields with numbers";
    return;
  } else {
    // alert(result);
    resultForm.value = result;
    textResult3.innerText = result;
    return;
  }
});

// ? Assignment 4

// Info about RegExp:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// Test: https://regexr.com/
// /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const button4 = document.querySelector("#btn-opg4");
const textResult4 = document.querySelector("#tekst-thing-4");

// button4.addEventListener("click", function () {
//   let email = document.querySelector("#input-email").value;

//   // TODO: Make email validation
// });

// Regex test
const regexConst = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
button4.addEventListener("click", function () {
  let email = document.querySelector("#input-email").value;

  if (regexConst.test(email)) {
    alert("Valid email");
    textResult4.innerText = "Valid email";
    return;
  } else {
    alert("Invalid email");
    textResult4.innerText = "Invalid email";
    return;
  }
});
