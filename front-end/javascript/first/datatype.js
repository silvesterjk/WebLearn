/*

A. There are 8 standard data types in javascript and they belong to either primitive types or reference types.
B. Primitive refers to essential/important data types and there are sevel of them. They are:
    1. String 2. Number 3. BigInt 4. Boolean 5. Undefined 6. Null 7. Symbol
C. There is one reference type which is 'Object.
*/

// String
let favoriteFruit = 'apples';

// Numbers (including floating points)
let numberofItems = 12;
let pi = 3.14;

// BigInt
let veryLargeNumber = 5456366643254n;

// Boolean
let youDumb = false;
youAmazing = true;

console.log(youDumb);
console.log(youAmazing);

// Undefined
let youAreNotDefined;

// Null -- To clear the value of a variable
favoriteFruit = null;

// Symbol
const uniqueKey = Symbol();

// Objects -- Can have complex structes. Can store more than one item as key value pairs.

let items = {
    name : 'alison',
    food : 'burgers'
};


// JavaScript is dynamically typed. Similar to Python.

let item = 'Steven';
console.log(typeof item);

item = 123;
console.log(typeof item);

item = true;
console.log(typeof item);


// Objects are similar to dictionaries in Python. Allowing us to group related values.



