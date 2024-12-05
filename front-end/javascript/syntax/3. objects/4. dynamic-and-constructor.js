// JavaScript objects are dynamic, allowing us to add properties or methods at any time.
// The 'const' keyword prevents reassigning the object, but it doesn't stop us from changing or mutating the properties and methods of the object it references.

const person = {
    name: 'McD'
};

console.log(person);

// We can add properties to an object dynamically using dot notation (member notation).
person.favoriteFood = 'Maharaj Mac Meal';

console.log(person);

// Could also use bracket notation
person['favoriteSide'] = 'Fries';

console.log(person);

// You could delete properties with the delete keyword
delete person.favoriteSide;

console.log(person);

person.outsideIndia = function(theOtherName) {
    return 'Who are you again, '+ theOtherName + '?'
}

// person.outsideIndia = name => `Who are you again, ${name}?`;

who = person.outsideIndia('McKing');
console.log(who)

// console.log(person);

// Every object in JavaScript has a constructor function.
const person = {
    name: 'Steven'
};

console.log( person.constructor );

let newObj = {};
// internally JavaScript sees this as let newObj = new Object();
// They are the same thing
// so object literal syntax is syntactic sugar

/*
new String(); // Silvester
new Boolean(); // true, false
new Number(); // 1, 2, 3
*/


/*

1. When we create an object literal like `{ name: 'Steven' }`, JavaScript automatically links it to `Object.prototype` through its constructor
2. `person.constructor` returns `[Function: Object]` because it references the `Object()` constructor function that JavaScript used to create your object behind the scenes
3. The constructor is essentially a blueprint that JavaScript uses to create new objects with shared properties and methods.

For comparison:
*/

const person1 = { name: 'Steven' };
const person2 = new Object({ name: 'Steven' });

console.log(person1.constructor === Object); // returns 'true'
console.log(person2.constructor === Object); // returns 'true'
