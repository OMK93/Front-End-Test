// Arithmetic Operators => +, - , *, /, ** (exponential), %(modulus, remainder), ++, --
console.log('Arithmetic');
console.log(2 ** 2);
console.log(2 ** 3);
console.log(10 / 2);
console.log(10 % 4); // We can use it to differentiate between odd and even


// Assignment operator
console.log('Assignment');
let number = 20;

number += 5; // shorthand for => number = number + 5;

console.log(number);

number *= 2;

number +=1;
number ++; // Post Increment
number --; // Decrement
number -= 1;
number = number - 1;
console.log(number);

// Post Increment vs Pre Increment (Same goes for Decrement)
console.log('Post Increment vs Pre Increment');

var test = 10;

console.log(test--);
console.log(test);

// Comparison Operators => will evaluate to boolean

/*
* Equal == (checks only the value)
* Not Equal !=
* Greater than >
* Less than <
* Greater than or equal >=
* Less than or equal <=
* Identical === (checks for both data type and value)
* Not Identical !==
* */

// Note: you can check the data type using typeof

console.log(typeof '1');
console.log(typeof 1.10);

// String Operators
console.log('String Operators');

console.log('Hello' + ' Again!');

let firstName = 'Omar';

firstName += 'Kamal';

console.log(firstName)

// Logical Operators

/*
* And &&
* Or ||
* Not !
* */

// PEDMAS (Parentheses, Exponential, Division, Multiplication, Addition, Subtraction)


