let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here

    firstArray.map((item) => newArray.push(item))
    secondArray.map((item) => newArray.push(item))
    
    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
