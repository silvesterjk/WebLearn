// Conditional statements, specifically if-else, are fundamental in programming.
// They allow dynamic decision-making, enabling the creation of personalized applications for end users.

/*

Syntax:

if(some_condition){
    do something
} else if (some_other_condition){
    do something else
 } else {
    this is the last resort
}

*/

let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

console.log('canBuyChocolate :', canBuyChocolate);  // This should return True
console.log(typeof canBuyChocolate);  // This should return boolean

if (hasAmountInCash >= priceOfChocolate) {
    console.log('Enjoy your purchase');
} else {
    console.log('Sorry you do not have enough');
}

let hour = 2;

if (hour > 6 && hour <= 12) {
    console.log('Serving breakfast');
} else if (hour > 12 && hour <= 14) {
    console.log('Serving lunch');
} else {
    console.log('Serving dinner');
}