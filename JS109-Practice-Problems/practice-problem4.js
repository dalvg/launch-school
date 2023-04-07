function closestNumbers(arr) {
  let arrCopy = arr.slice().sort((a, b) => a - b);
  let result = [arrCopy[0], arrCopy[1]];

  for (let idx = 1; idx < arr.length - 1; idx += 1) {
    let firstNumber = arrCopy[idx];
    let secondNumber = arrCopy[idx + 1];
    let difference = Math.abs(secondNumber - firstNumber);

    if (difference < Math.abs(result[1] - result[0])) {
      result[0] = firstNumber;
      result[1] = secondNumber;
    }
  }
  result.sort((a, b) => arr.indexOf(a) - arr.indexOf(b));
  return result;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]