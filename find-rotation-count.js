function findRotationCount(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	if (arr[leftIdx] < arr[rightIdx]) {
		return 0;
	}
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[midIdx] < arr[midIdx - 1] && arr[midIdx] < arr[midIdx + 1]) {
			return midIdx;
		} else if (arr[midIdx] > arr[midIdx - 1] && arr[midIdx] > arr[midIdx + 1]) {
			return midIdx + 1;
		} else if (arr[midIdx] >= arr[rightIdx]) {
			leftIdx = midIdx + 1;
		} else if (arr[midIdx] <= arr[leftIdx]) {
			rightIdx = midIdx - 1;
		}
	}
}

module.exports = findRotationCount;
