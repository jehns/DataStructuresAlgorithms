function twoNumberSum(array, targetSum) {
  const prevNumbers = {};
	const numsSumToTarget = [];
	for (let i = 0; i < array.length; i++) {
		if (prevNumbers.hasOwnProperty(targetSum - array[i])) {
			numsSumToTarget.push(array[i], targetSum - array[i])
    }
    prevNumbers[array[i]] = true;
  }
  return numsSumToTarget.sort((a, b) => a - b);
}
