// console.log("Hello world");

// camel case helloWorld

// Illegal variable name

// let user name;  Contains Spaces
// let 3username; Starts with a Number
// let (jklasdfj;
// let hi_f$@jj; Contains Special Characters (Except _ and $)
// let true;  Uses Reserved Keywords

// Function

// keyword, variable name/function name, asg opener, parameters, arrow, block of code
const greet = (txt) => {
  console.log(txt);
};

greet("hello world333");

const sum = (num1, num2) => {
  console.log(num1 + num2);
};

sum(10, 20);

const sub = (num1, num2) => {
  console.log(num1 - num2);
};

sub(10, 20);

// class(10,30, +)

// const greetAPerson = (pName) => {
//   console.log("Hello", pName, "how are you?");
// };

// let userName = prompt("Enter your user name");

// greetAPerson(userName);

// CONDITIONAL STATEMENT IF / ELSE

// keyword condition block of code
// if(){}
// if, condition is false
// else{}

// let num = "10";

// if (num === 10) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// else if (num == 15) {
//   console.log("Number is 15");
// }

// comparision operators

// ==
// ===
// < >
// <= >=
// &&
// ||

let email = "sarim@gmail.com";
let pass = "sarim123";

let userEmail = prompt("Enter your email");
let userPass = prompt("Enter your password");

const authentication = (email, userEmail, pass, userPass) => {
  if (email == userEmail && pass == userPass) {
    console.log("User is authenticated");
  } else {
    console.log("User is not signed up");
  }
};

authentication(email, userEmail, pass, userPass);
