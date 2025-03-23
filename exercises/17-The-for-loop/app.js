let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here
let elementSum = 0;
for (let element of myArray) {
    elementSum += element;
    // console.log("sum: " + elementSum);
}
console.log(elementSum / myArray.length);