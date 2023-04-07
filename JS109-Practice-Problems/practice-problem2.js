function minimumSum(arr) {
  if (arr.length < 5) return null;
  let result = [];

  for (let idx = 0; idx <= arr.length - 5; idx += 1) {
    let start = idx;
    let end = idx + 5;
    let reducedValue = arr.slice(start, end).reduce((acc, cur) => acc + cur);
    result.push(reducedValue);
  }

  result.sort((a, b) => a - b);

  return result.shift();
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);