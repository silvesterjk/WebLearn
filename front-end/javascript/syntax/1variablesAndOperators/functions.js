function sayHi () {
    let message = 'welcome';
    console.log(message); // Similar to print in python
}

sayHi (); // Function call


function sayHiAgain (name) {
    let message = 'welcome ' + name; // String concatenation
    console.log(message); // Similar to print in python
}

sayHiAgain ('Silvester'); // Function call


// Considerations: Functions are used to either perform an action/calculations or to return a value.

function add (num1, num2) {
    return num1 + num2; // Similar to python just return won't print the value
}

value = add (2,3);
console.log(value);


function multi (num1, num2) {
    const product = num1 * num2;
}

console.log(multi(2,3)); // This would return undefined as we did not use the return keyword in the function