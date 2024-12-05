// Objects store key-value pairs, helping us group related data and behavior together.
// This makes the code more organized and cohesive.
// Encapsulation is the concept of bundling data and methods that operate on that data.
// Into a single unit, while hiding internal details to prevent misuse or interference.

const dog = {
    name: "Atom",
    breed: "Golden Retriever",
    age: 5,
    weightInKilos: 15.4,
    eat: function(boop) {
        return boop + " " + boop;
    },
    bark() {
        return "Woof!";
    }
}

val = dog.bark();
console.log(val);