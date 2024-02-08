// ? Assignment 1

// Writes what assignment it's part of
console.log("Assignment 1");

// Array with all the Nordic countries
let nordicCountries = ["Denmark", "Sweden", "Norway", "Finland"];

// Prints the array of countries to the console
console.log(nordicCountries);

// ? Assignment 2

// Writes what assignment it's part of
console.log("Assignment 2");

// Array with random values
let randomValues = ["Christian", 45, [1, 2, 3], "Dorte"];

// Prints the number 2, inside the array
console.log(randomValues[2][1]);

// ? Assignment 3

// Writes what assignment it's part of
console.log("Assignment 3");

// Array with a list of fruits
let fruits = ["apples", "oranges", "bananas"];

// Prints the list of fruits
console.log(fruits);

// Adds kiwis to the array
fruits.push("kiwis");

// Adds strawberries to the front of the array
fruits.unshift("strawberries");

// Removes the last element from the array, and prints it to the console
console.log("Removed: " + fruits.pop());

// Removes everything but the first element from the array
fruits.splice(1);

// Prints the list of fruits to the console
console.log(fruits);

// ? Assignment 4

// Writes what assignment it's part of
console.log("Assignment 4");

// Makes the associative array with the person's information
let personArray = {
  firstname: "John",
  lastname: "Doe",
  address: "Fosse Way 1",
  city: "London",
  phone: "4532 2341 7392",
};

// Prints the person's information to the console
console.log(personArray);

// Writes the indexes of the associative array to the console
console.log(Object.keys(personArray));

// ! The code bellow is another way to write the indexes of the associative array to the console
// for (let index in personArray) {
//   console.log(index);
// }

// Writes all the values from the associative array to the console
console.log(Object.values(personArray));

// ! The code bellow is another way to write all the values from the associative array to the console
// for (let value in personArray) {
//   console.log(personArray[value]);
// }

// Writes both the index and the values of the associative array to the console
console.log(Object.entries(personArray)); // This looks better in my eyes

// ! The code bellow is another way to write both the index and the values of the associative array to the console
// console.log(Object.keys(personArray), Object.values(personArray));

// ! A third way to write both the index and the values of the associative array to the console
for (let [index, value] of Object.entries(personArray)) {
  console.log(index + " : " + value);
}

// Assignment 5

// Asks the user for a number between 1-10 (inclusive)
let gotNumberFromUser = true;
let number = 0;
while (!gotNumberFromUser) {
  number = prompt("Enter a number between 1-10");

  if (number >= 1 && number <= 10 && !isNaN(number) && number === "") {
    console.log("The number works");
    gotNumberFromUser = true;
    break;
  } else {
    alert(
      `${number} is not a number between 1-10\nPlease enter a number between 1-10`
    );
  }
}

alert(`The number you entered was: ${number}`);
