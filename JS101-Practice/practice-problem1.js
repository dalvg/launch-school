function smallerNumbersThanCurrent(arr) {
  let result = [];
  arr.forEach(elementToCompare => {
    let tempArr = [];
    arr.forEach(element => {
      if (elementToCompare > element &&
          !tempArr.includes(element)) {
        tempArr.push(element);
      }
    });
    result.push(tempArr.length);
  });
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]