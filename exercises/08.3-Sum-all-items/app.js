function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(let i = 0; i < theArray.length; i++) {
		total += theArray[i]
	}

	return total;
}

sumTheElements([10,10, 30, 4])
