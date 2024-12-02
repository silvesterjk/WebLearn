// Switch-case statements are another way to control flow in programming.
// Unlike if-else statements, switch-case is limited to equality comparisons.

// With the if else logic

let job = 'Software Developer';

if (job === 'Software Developer') {
    console.log('Writes code');
} else if (job === 'Designer') {
    console.log('Makes user interface documents');
} else if (job === 'Cloud Engineer') {
    console.log('Manages and deploys cloud resources');
} else {
    console.log('Works directly with customers');
}

// Equality comparisons can become repetitive and hard to read.
// In such cases, switch-case statements can be used for cleaner, more readable code.

// With the switch-case logic

switch (job) {
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Makes user interface documents');
        break;
    case 'Cloud Engineer':
        console.log('Manages and deploys cloud resources');
        break;
    default:
        console.log('Works directly with customers');
}