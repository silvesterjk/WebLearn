// Let's say we have two arrays and we want to combine it into one array.
const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

// Can combine these arrays using the concat method.
const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log('combinedArray', combinedArray);
// Would result [1,2,3,4,5,6]

// slice(startIndex, endIndex) where the endIndex is exclusive (not included)
// The slice method will not affect the original array.
const firstSlice = combinedArray.slice(0, 4);
console.log('firstSlice', firstSlice);

// If you doing this will primitive values, then the elements will be passed by copy.
// However if you're dealing with objects, then the elements will be passed by reference.

// There is another way to combine two arrays.
// Which is to utilize the spread operator.

// So the spread operator can be used
// to copy the properties of an object or the elements of an array.

const exampleNumbersofA = [1, 2, 3];
const exampleNumbersofB = [4, 5, 6];

// So rather than doing
// let combined = exampleNumbersofA.concat(exampleNumbersofB);

// Below is the more commonly used syntax.

let combined = [...exampleNumbersofA, ...exampleNumbersofB];
console.log(combined);

combined = [...exampleNumbersofA, 9, ...exampleNumbersofB, 10];

// Arrays are objects, meaning that they are passed by reference.
let a = [1, 2];
let b = a;

// So we could also use the spread operator in order to make a copy of an array. A new array.
b = [...a];