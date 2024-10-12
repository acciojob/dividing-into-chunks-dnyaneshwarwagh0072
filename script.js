const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      result.push(currentChunk);
      currentChunk = [];
      currentSum = 0;
    }
    currentChunk.push(arr[i]);
    currentSum += arr[i];
  }
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  return result;
};
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));