// =================================================================
// Variables -------------------------------------------------------
// =================================================================

// First assignment
let greeting = "Hello World!";
console.log(greeting);

let firstname = "John";
let middlename = "F.";
let lastname = "Kennedy";

let fullname = firstname + " " + middlename + " " + lastname;
console.log(fullname);

let salary = "5000";
console.log(salary);

let calculate = (5 + 5) * 3;
console.log(calculate);

let deci1 = 2.25;
let deci2 = 3.5;
let sum2 = Math.ceil(deci1 + deci2);
console.log(sum2);

let deci3 = 2.55;
let deci4 = 1.44;
let sum3 = Math.floor(deci3 + deci4);
console.log(sum3);

// let deci5 = Math.sqrt(65);
// console.log(deci5);
console.log(Math.sqrt(65));

let str = "John Doe is 25 years old";
let douge = str.slice(5, 8);
console.log(douge);

let compare = false;
console.log("Bool: " + compare);

console.log("Type of: " + typeof fullname);
console.log("Type of: " + typeof salary);
console.log("Type of: " + typeof deci3);
console.log("Type of: " + typeof compare);

// FINAL ROUND... FIGHT!
// Opg 11

let type1 = "10";
let type2 = "2";
let type3 = 20;
let type4 = 10;

// todo: make good
// a
console.log(type1 + type2);

// b
console.log(type1 + type3);

// c
console.log(type4 + type2);

// d
console.log(type3 + type4);

// e
console.log("Resulatet af type3 + type4 er: " + (type3 + type4));

// f
console.log(
  "Resulatet af type3 + type4 + type2 er: " + (type3 + type4 + type2)
);

// g
console.log("Resulatet af type4 / type2 er: " + type4 / type2);

// h
console.log("Resulatet af type2 * type3 + type1 er: " + type2 * type3 + type1);

// i
console.log(
  "faa resultatet af type1 + type2 til at give 12: " +
    (Number.parseInt(type1) + Number.parseInt(type2))
);

// j
console.log(
  "faa resultatet af type3 + type4 til at give 2010: " +
    (type3.toString() + type4)
);
