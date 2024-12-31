// For-loops are commonly used to iterate over arrays.
// The for-in loop is used to iterate over the keys of a JavaScript object,
// which is a data type that stores key-value pairs.

const course = {
    name: 'JS',
    duration: 3,
    sections: 7
};

console.log(course.name);
console.log(course['duration']);
console.log(course.sections);

// We could also iterate over the keys with the for-in loop.
for (const key in course) {
    console.log(course[key]);
}