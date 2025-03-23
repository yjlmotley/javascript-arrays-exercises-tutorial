let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here

function mergeTwoList(array) {
    let oddNumbers = [];
    let evenNumbers = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        } else {
            oddNumbers.push(array[i]);
        }
    }

    return oddNumbers.concat(evenNumbers);
}

console.log (mergeTwoList(listOfNumbers));