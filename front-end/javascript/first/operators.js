/* 

subtraction -
addtion +
multiplication *
division /
modular %
exponential ** 

*/

let a = 10;

console.log(a+1); // This add a with value 1

console.log(a+=2); // Syntactic sugar to achieve the same thing -- Here a becomes 12

console.log(a++); // This increments the value by one. But it first prints a and then adds one on top of that.
console.log(a); // As shown here

console.log(++a); // Here it adds one to a first and then return a

// This applies to decrement a value too

let b = 10;
console.log(b-1); // This add a with value 1

console.log(b-=2); // Syntactic sugar to achieve the same thing -- Here a becomes 8

console.log(b--); // This decrements the value by one. But it first prints a and then subtracts one on top of that.
console.log(b); // As shown here

console.log(--b); // Here it adds one to a first and then return a


/*

Comparision Operators:
> --> less than
< --> greater than

*/

// The result of a comparison operator is a boolean value, true or false.
let num1 = 15;
let num2 = 1;

const isNum1Greater = num1 > num2;
console.log('isNum1Greater :', isNum1Greater);

const isNum1GreaterThanOrEqualTo = num1 >= num2;
console.log('isNum1GreaterThanOrEqualTo :', isNum1GreaterThanOrEqualTo);

const isNum1LessThan = num1 < num2;
console.log('isNum1LessThan :', isNum1LessThan);

const isNum1LessThanOrEqualTo = num1 <= num2;
console.log('isNum1LessThanOrEqualTo :', isNum1LessThanOrEqualTo);


// Loose equality, which uses ==
// Strict equality, which uses ===

let val1 = 10;
let val2 = '10';

// Loose equality evaluates if the comparison is truthy.
// Loose equality doesn't check if the data types are the same.
// JavaScript will perform type coersion with loose equality, converting the data types to be the same before comparing.
console.log(val1 == val2); // true

// Strict equality returns true only if both the data type and the values are the same. This is unlike Python.
console.log(val1 === val2); // false
console.log(true == '1'); // true, as it converts the value to boolean, where 1 is True and anything else is False.



