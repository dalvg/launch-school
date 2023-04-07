function duplicates(array) {
  array.sort((a, b) => a - b);
  let count = 0;
  for (let idx = 0; idx < array.length; idx += 1) {
    let lastIdxOfCurrentNumber = array.lastIndexOf(array[idx]);
    if (idx !== lastIdxOfCurrentNumber) {
      let totalNumbers = lastIdxOfCurrentNumber - idx + 1;
      let pairs = Number.parseInt(totalNumbers / 2 , 10);
      count += pairs;
      idx = lastIdxOfCurrentNumber;
    }
  }
  return count;
}

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); //,4