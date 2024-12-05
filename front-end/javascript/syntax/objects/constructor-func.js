// Object literal syntax creates a single object, but factory functions offer a reusable way to generate objects 
// with the same state and behavior (properties and methods).
// However, constructor functions are more commonly used for this purpose.
// Constructor functions initialize an object's state and are named using PascalCase.
// The 'this' keyword is used within the constructor to define properties and methods for the object.

function Dog(name, breed, age, weightInPounds) {
    // this is done internally
    // this = {};    // Add properties to this object.  Similar to self in Python.

    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    // Add methods to this object

    this.eat = function() {
        console.log(this.name + ': Chomp!');
    },

    this.bark = function() {
        console.log(this.name + ': Woof!');
    }

    // this is done internally
    // return this;
}

// The 'new' keyword is used to call a constructor function, instantiating a new object in memory.
// It creates an empty object, sets the 'this' keyword to reference the new object, and returns the 'this' object.
// The purpose of a constructor function is to instantiate and initialize an object 
// with its initial state, determined by the arguments passed to its parameters.

const anotherDog = new Dog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog)