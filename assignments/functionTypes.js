// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

let increment = n => ++n;

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
let decrement = n => --n;
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
let add = (a, b) => a + b;
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
let sub = (a, b) => a - b;
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
let mul = (a, b) => a*b;
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
let div = (a, b) => a/b;
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
let squared = n => n*n;
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
let operation = (operation, x, y) => {
	switch (operation) {
		case "add":
			console.log(`${x} + ${y} = ${x + y}`);
			break;
		case "subtract":
			console.log(`${x} - ${y} = ${x - y}`);
			break;
		case "multiply":
			console.log(`${x} * ${y} = ${x * y}`);
			break;
		case "divide":
			console.log(`${x} / ${y} = ${x / y}`);
			break;
	}				
}
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

let max = (a, b) => (a > b) ? true : false;

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
let min = (a, b) => (a < b) ? true : false;
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
let equal = (a, b) => (a === b);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
let smaller = (a, b) => (a < b) ? a : b;
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
let larger = (a, b) => (a > b) ? a : b;
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
let isEven = (a) => (!(a & 1));
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
let isOdd = (a) => (a & 1);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
let grade = (score) => {
	switch (true) {
		case score >= 90:
			return 'A';
		case score >= 80:
			return 'B';
		case score >= 70:
			return 'C';
		case score >= 60:
			return 'D';
		default:
			return 'F';				
	}
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
let join = (word1, word2) => (word1 + ' ' + word2);