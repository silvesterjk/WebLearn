// The 'break' statement is used to terminate a loop when a specific condition is met.
// The 'continue' statement allows you to skip the current iteration and move to the next one.

// break statement in the for loop
for (let i = 0; i < 10; i++) {
    if (i === 5)
        break;

    console.log(i);
}

// break statement in the while loop
let i = 0;
while (i < 10) {
    if (i === 5)
        break;

    console.log(i);

    i++;
}

// break statement in the do-while loop
let doWhileIdx = 0;
do {
    if (doWhileIdx === 5)
        break;

    console.log(doWhileIdx);

    doWhileIdx++;
} while (doWhileIdx < 10);

// break statement in the for-in loop
let object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    if (key === 'b') break;

    console.log(object[key]);
}

// break statement in the for-of loop
const array = [1, 2, 3, 4, 5];
for (let element of array) {
    if (element === 3) break;

    console.log(array[element]);
}

// Now let us consider the continue keyword -- This allows us to skip something and continue

// continue statement in the for loop -- here we're skipping the odd values
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
        continue;

    console.log(i);
}

// continue statement in the while loop
let whileLoopIdx = 0;
while (whileLoopIdx < 10) {
    if (whileLoopIdx % 2 === 0)
        continue;

    console.log(whileLoopIdx);

    whileLoopIdx++;
}

// continue statement in the do-while loop
doWhileIdx = 0;
do {
    if (doWhileIdx % 2 === 0)
        continue;

    console.log(doWhileIdx);

    doWhileIdx++;
} while (doWhileIdx < 10);

// continue statement in the for-in loop
object = { a: 1, b: 2, c: 3, d: 4 };

for (const key in object) {
    if (object[key] % 2 === 0) continue;

    console.log(object[key]);
}

// continue statement in the for-of loop
for (let element of array) {
    if (element % 2 === 0) continue;

    console.log(array[element]);
}