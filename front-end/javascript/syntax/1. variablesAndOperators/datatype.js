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

let data = {
    name: "I am Silvester",
    dept: 2024
}

console.log(data.dept) // dot notation is similar to that of Python

data.dept = 2025; // To replace the data
console.log(data.dept)

console.log(data['name']) // Called bracket notation, this method is used if we don't to which property to access until runtime

let vorname = 'dept'; // If the key of an object is assigned to a variable --- For a later recall
console.log( data[vorname] );

// To create an access arrays -- Very similar to python
// Thing to note is the here, an array is an object with key value pair and not a seperate datatype like 'list' in python.

let fruits = ['cherry', 'bananas', 'coil'];
console.log(fruits[2]) // To call the item in the second index of the array

fruits[2] = 'apple'
console.log(fruits[2]) // To replace the item in the second index of the array

console.log(typeof fruits) // This returns 'object' as the data type

console.log(fruits.length) // Length is an array property to see how many items are there in an array






