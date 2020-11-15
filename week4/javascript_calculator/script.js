const readlineSync = require("readline-sync");

// A function that adds two numbers and returns the result

function addTwoNumbers(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

// A function that multiplies two numbers and returns the result

function multiplyTwoNumbers(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

// A function that divides two numbers and returns the result

function divideTwoNumbers(num1, num2) {
    return parseFloat(parseInt(num1) / parseInt(num2));
}

// A function that subtracts two numbers and returns the result

function subractTwoNumbers(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)

let num1 = readlineSync.question("Please enter your first number: ");
let num2 = readlineSync.question("Please enter your second number: ");
let operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");

// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]

if (operation === "add") {
    let result = addTwoNumbers(num1, num2);
    console.log("The result is " + result);
} else if (operation === "sub") {
    let result = subractTwoNumbers(num1, num2);
    console.log("The result is " + result);
} else if (operation === "mul") {
    let result = multiplyTwoNumbers(num1, num2);
    console.log("The result is " + result);
} else if (operation === "div") {
    let result = divideTwoNumbers(num1, num2);
    console.log("The result is " + result);
} else {
    console.log("Please try again");
}