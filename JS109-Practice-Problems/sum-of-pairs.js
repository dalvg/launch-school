function sumPairs(ints, s) {
  let result = new Set();
  for (let idx = 0; idx < ints.length; idx += 1) {
    let value = s - ints[idx];
    if (result.has(value)) return [ints[idx], value];
    result.add(ints[idx]);
  }
  return undefined;
}


console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([0,2,0],0));