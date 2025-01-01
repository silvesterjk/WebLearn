let numbers = [1, 2, 3, 4, 5];

// If you want to clear all the elements of an array,
// there are different ways that you can do that.

// If the numbers array was large, then this would be inefficient.
while (numbers.length > 0)
    numbers.pop();

// could set the length property to 0

numbers = [1, 2, 3, 4, 5];

numbers.length = 0; // we could assign it to 0, clearing/emptying the array

// could use the .splice() method 

numbers = [1, 2, 3, 4, 5];

const deletedNumbers = numbers.splice(0, numbers.length);
console.log(`deletedNumbers: ${deletedNumbers}`);

// could reassign the array to an empty array,
// the previous array would be garbage collected

numbers = [1, 2, 3, 4, 5];
numbers = [];

// For this 

const numbers  = [1, 2, 3, 4, 5]; // will not work and it needs to be let

// if 
let anotherNumber = numbers;

// -- anotherNumber refers to the instance of 'numbers' and even if it is assigned to [], anotherNumber will not be garbage collected.