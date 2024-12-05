// Creating another object with the same properties and methods as the dog object 
// would require copying and pasting, which leads to code duplication.
// Code duplication should be avoided to maintain clean and efficient programs.

const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
};

// Code duplication makes our program harder to read, prone to bugs, and difficult to modify.

// To create another dog object without duplication, we can use a factory function.
// A factory function, named in camelCase, returns an object literal.
// The function takes arguments to customize the object, keeping the details within the function.

function getDog(name, bred, age, weightInPounds) {
    return {
        name, // If the key and the value are the same like name : name, then we can just leave it as name, in JS, they're the same.
        breed : bred, // As shown here, if they are different, we need to specify it.
        age,
        weightInPounds,
        eat: function() {
            console.log(this.name + ': Chomp!');
        },
        bark() {
            console.log(this.name + ': Woof!');
        }
    };
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog)