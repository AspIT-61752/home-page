// Assignment 1
let arr = [];

// arr.push(prompt("First number?"));
// arr.push(prompt("Second number?"));

// test numbers: 10, 25, 30, 5
arr.push(25);
arr.push(30);
arr.push(10);
arr.push(5);

arr.sort();
window.console.log("Opg1: " + arr.toString());
// alert("Opg1: " + arr.toString());

// Assignment 2

let arr2 = [];
// arr2.push(prompt("Write 3 number, sepperated by a space: ")); // This can take less and more than 3 numbers. Might want to fix this later.
const splitArr2 = arr2.slice(" ");
window.console.log("Opg2: " + splitArr2.toString());
// alert("Opg2: " + splitArr2.toString());

// Assignment 3
// get a number from the user's input, and checks if the number is even or odd.
let numberToCheck;

// try catch to see if it is a number.
let isNumber = true; // change to false when you want to use this
while (!isNumber) {
  try {
    numberToCheck = parseInt(prompt("Write a number: "));
  } catch (error) {
    window.console.log("Opg3: " + error);
    alert("Opg3: " + error);
  } finally {
    if (isNaN(numberToCheck)) {
      window.console.log("Opg3: " + numberToCheck + " is not a number.");
      alert("Opg3: " + numberToCheck + " is not a number.");
    } else {
      isNumber = true;
    }
  }
}

// number = prompt("Write a number: ");
if (numberToCheck % 2 === 0) {
  window.console.log("Opg3: " + numberToCheck + " is even.");
  // alert("Opg3: " + number + " is even.");
} else {
  window.console.log("Opg3: " + numberToCheck + " is odd.");
  // alert("Opg3: " + number + " is odd.");
}

// Assignment 4
let userScore;

// try catch to see if it is a number.
let isNumber2 = true; // change to false when you want to use this
while (!isNumber2) {
  try {
    userScore = parseInt(prompt("Write your score: "));
  } catch (error) {
    window.console.log("Opg4: " + error);
    alert("Opg4: " + error);
  } finally {
    if (isNaN(userScore)) {
      window.console.log("Opg4: " + userScore + " is not a number.");
      alert("Opg4: " + userScore + " is not a number.");
    } else if (!(0 <= userScore && userScore <= 80)) {
      window.console.log(
        "Opg4: " + userScore + " is not within the range of 0-100."
      );
      alert("Opg4: " + userScore + " is not within the range of 0-100.");
    } else {
      userScore = parseInt(userScore);
      isNumber2 = true;
    }
  }
}

// switch (true) {
//   case userScore == 0:
//     window.console.log("Opg4: Result = -3");
//     alert("Opg4: Result = -3");
//     break;
//   case userScore <= 10:
//     window.console.log("Opg4: Result = 00");
//     alert("Opg4: Result = 00");
//     break;
//   case userScore <= 20:
//     window.console.log("Opg4: Result = 02");
//     alert("Opg4: Result = 02");
//     break;
//   case userScore <= 40:
//     window.console.log("Opg4: Result = 4");
//     alert("Opg4: Result = 4");
//     break;
//   case userScore <= 55:
//     window.console.log("Opg4: Result = 7");
//     alert("Opg4: Result = 7");
//     break;
//   case userScore <= 70:
//     window.console.log("Opg4: Result = 10");
//     alert("Opg4: Result = 10");
//     break;
//   case userScore <= 80:
//     window.console.log("Opg4: Result = 12");
//     alert("Opg4: Result = 12");
//     break;
//   default:
//     window.console.log("Opg4 error: " + userScore);
//     alert("Opg4 error: " + userScore);
//     break;
// }

// Assignment 5
/*
x ganget med sig selv er: [resultat]
Kvadratroden af x er: [resultat]
x opløftet i x. potens er: [resultat]  (fx 33)
 */

let userNumber5;

let isNumber3 = false; // change to false when you want to use this
while (!isNumber3) {
  try {
    userNumber5 = parseInt(prompt("Write number to do math: "));
  } catch (error) {
    window.console.log("Opg4: " + error);
    alert("Opg4: " + error);
  } finally {
    if (isNaN(userNumber5)) {
      window.console.log("Opg4: " + userNumber5 + " is not a number.");
      alert("Opg4: " + userNumber5 + " is not a number.");
    } else {
      userNumber5 = parseInt(userNumber5);
      isNumber3 = true;
    }
  }
}

// window.console.log(
//   `Opg5:\n${userNumber5} ganget med sig selv er: ${
//     userNumber5 * userNumber5
//   }\n` +
//     `Kvadratroden af ${userNumber5} er: ${Math.sqrt(userNumber5)}\n` +
//     `${userNumber5} opløftet i ${userNumber5}. potens er: ${Math.pow(
//       userNumber5,
//       userNumber5
//     )}`
// );

alert(
  `Opg5:\n${userNumber5} ganget med sig selv er: ${
    userNumber5 * userNumber5
  }\n` +
    `Kvadratroden af ${userNumber5} er: ${Math.sqrt(userNumber5)}\n` +
    `${userNumber5} opløftet i ${userNumber5}. potens er: ${Math.pow(
      userNumber5,
      userNumber5
    )}`
);

// Assignment 6
// Get current month
let currentDate = new Date().getMonth();

let seasonString;

// Sets the current month to the string (seasonString)
switch (currentDate) {
  case 0:
    seasonString = "January";
    break;
  case 1:
    seasonString = "February";
    break;
  case 2:
    seasonString = "March";
    break;
  case 3:
    seasonString = "April";
    break;
  case 4:
    seasonString = "May";
    break;
  case 5:
    seasonString = "June";
    break;
  case 6:
    seasonString = "July";
    break;
  case 7:
    seasonString = "August";
    break;
  case 8:
    seasonString = "September";
    break;
  case 9:
    seasonString = "October";
    break;
  case 10:
    seasonString = "November";
    break;
  case 11:
    seasonString = "December";
    break;
  default:
    window.console.log("Opg6: Error");
    break;
}

// Adds the current season to the string (seasonString)
switch (currentDate) {
  case 0:
  case 1:
  case 11:
    seasonString += " It's winter.";
    break;
  case 2:
  case 3:
  case 4:
    seasonString += " It's spring.";
    break;
  case 5:
  case 6:
  case 7:
    seasonString += " It's summer.";
    break;
  case 8:
  case 9:
  case 10:
    seasonString += " It's autumn.";
    break;
  default:
    window.console.log("Opg6: Error");
    break;
}

window.console.log("Opg6: " + seasonString);
alert("Opg6: " + seasonString);
