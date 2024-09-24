// Initialize variables and constant
var a = 25;      // Variable a
var b = 20;      // Variable b
var c = 12;      // Variable c
var d = "15";    // Variable d (string)
const e = 15;    // Constant e

// a. Calculate and display the sum of a, b, c, d, and e
var sum = a + b + c + Number(d) + e; // Convert d to a number
console.log("Sum: " + sum); // Output the sum

// b. Compare d and e using relational operators and store results in variables
var isGreater = Number(d) > e;   // Is d greater than e?
var isLess = Number(d) < e;      // Is d less than e?
var isGreaterOrEqual = Number(d) >= e; // Is d greater than or equal to e?
var isLessOrEqual = Number(d) <= e;    // Is d less than or equal to e?
var isEqual = Number(d) === e;   // Is d equal to e?

// c. Declare variables for operations
var subtract = a - b - c - Number(d) - e; // Subtract all values
console.log("Subtraction Result: " + subtract); // Output the result

var multiplyDivide = (a * c) / e; // Multiply a and c, then divide by e
console.log("Multiplication and Division Result: " + multiplyDivide); // Output the result

var exponent = Math.pow(e, c); // e raised to the power of c
console.log("Exponent Result: " + exponent); // Output the result

// Change the value of c
c = 3; // Reassign c to 3
console.log("New value of c: " + c); // Output the new value of c
