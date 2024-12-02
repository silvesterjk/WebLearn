let numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// To output all of the elements in the array.

let idx = 0;
let lengthOfArray = numbers.length;

console.log( numbers[idx++] ); // This would first print the value and then increment idx by 1
console.log( numbers[idx++] ); // Here this gets incremented to 2 and so on.
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx++] );
console.log( numbers[idx] );

// You can use the for loop to efficiently iterate through an array
// With 3 parts: 1. Initialization 2. Condition 3. Increment
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]); // Prints 0 to 99
}

for (let idx = 1; idx < 101; idx++) {
    console.log(idx); // Prints 1 to 100
}