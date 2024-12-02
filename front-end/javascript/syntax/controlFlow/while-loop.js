let numbers = [1, 2, 3, 4, 5, 6, 7];

// We use for loops when we know the exact number of times that we want the loop to execute.
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

// A while-loop is useful when you know the condition that must be true to continue looping,
// but not the exact number of times the loop should run.

// We use while loop when we do not know how many times to iterate over but a condition to stop the iteration

let idx = 0;
while (idx < numbers.length) {
    console.log(numbers[idx]);

    idx++;
}

let sum = 0;
while (true) {
    console.log('Loop');
    sum++;

    if (sum === 10)
        break;
}