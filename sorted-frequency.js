function sortedFrequency(arr, val) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let firstValIdx;
	let lastValIdx;

	if (arr[leftIdx] === val && arr[rightIdx] === val) {
		return arr.length;
	}

	while (leftIdx <= rightIdx && firstValIdx === undefined) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[midIdx] === val) {
			if (arr[midIdx - 1] < val || midIdx === 0) {
				firstValIdx = midIdx;
				leftIdx = firstValIdx;
			} else {
				rightIdx = midIdx - 1;
			}
		} else if (arr[midIdx] < val) {
			leftIdx = midIdx + 1;
		} else if (arr[midIdx] > val) {
			rightIdx = midIdx - 1;
		}
	}

	if (firstValIdx === undefined) {
		return -1;
	}
	rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx && lastValIdx === undefined) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[midIdx] === val) {
			if (arr[midIdx + 1] > val || midIdx === rightIdx) {
				lastValIdx = midIdx;
			} else {
				leftIdx = midIdx + 1;
			}
		} else if (arr[midIdx] < val) {
			leftIdx = midIdx + 1;
		} else if (arr[midIdx] > val) {
			rightIdx = midIdx - 1;
		}
	}
	return lastValIdx - firstValIdx + 1;
}

module.exports = sortedFrequency;
