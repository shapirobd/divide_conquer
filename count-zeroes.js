function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	if (arr[leftIdx] === 0) {
		return arr.length;
	} else if (arr[rightIdx] === 1) {
		return 0;
	}
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		let midVal = arr[midIdx];
		if (midVal === 0 && arr[midIdx - 1] === 1 && arr[midIdx + 1] === 0) {
			return arr.length - midIdx;
		} else if (midVal === 1) {
			leftIdx = midIdx + 1;
		} else if (midVal === 0) {
			rightIdx = midIdx - 1;
		}
	}
}

module.exports = countZeroes;
