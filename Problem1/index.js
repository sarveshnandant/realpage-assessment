// Write function to find the second largest integer in the array using single loop

function sortArray(arr) {
	// Loop Array
	for (let i = 0; i < arr.length; i++) {
		// if current element is greater than the next element
		if (arr[i] > arr[i + 1]) {

			// swap the elements
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;

			// updating value i = -1, after i++, it will be 0 and loop begins from the start.
			i = -1;
		}
	}
	return arr;
}



const inputArray = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
const sortedArray = sortArray(inputArray);

if (sortedArray.length > 2) {
	const secondLargestVal = sortedArray[sortedArray.length - 1];
	console.log(`Print the second largest integer value`, {
		secondLargestVal
	});
} else {
    console.log('Not enough elements');
}