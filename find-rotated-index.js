function findRotatedIndex(arr, val) {
	let trueFirstIdx;
	let trueLastIdx;
	let sortedArr = [...arr];
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let shiftLength;

	while (
		leftIdx <= rightIdx &&
		trueFirstIdx === undefined &&
		trueLastIdx === undefined
	) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[midIdx] <= arr[midIdx + 1] && arr[midIdx] < arr[midIdx - 1]) {
			trueFirstIdx = midIdx;
			let greaterValues = sortedArr.splice(0, trueFirstIdx);
			sortedArr = [...sortedArr, ...greaterValues];
			shiftLength = midIdx + 1;
		} else if (
			arr[midIdx] > arr[midIdx + 1] &&
			arr[midIdx] >= arr[midIdx - 1]
		) {
			trueLastIdx = midIdx;
			let greaterValues = sortedArr.splice(0, trueLastIdx + 1);
			sortedArr = [...sortedArr, ...greaterValues];
			shiftLength = midIdx + 1;
		} else if (
			arr[midIdx] <= arr[midIdx + 1] &&
			arr[midIdx] >= arr[midIdx - 1]
		) {
			if (arr[midIdx] <= arr[leftIdx]) {
				rightIdx = midIdx - 1;
			} else if (arr[midIdx] >= arr[rightIdx]) {
				leftIdx = midIdx + 1;
			}
		}
	}

	leftIdx = 0;
	rightIdx = sortedArr.length - 1;

	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (sortedArr[midIdx] === val) {
			if (midIdx > shiftLength) {
				return midIdx - shiftLength;
			} else if (midIdx < shiftLength) {
				return midIdx + shiftLength;
			}
		} else if (sortedArr[midIdx] > val) {
			rightIdx = midIdx - 1;
		} else {
			leftIdx = midIdx + 1;
		}
	}
	return -1;
}

module.exports = findRotatedIndex;
