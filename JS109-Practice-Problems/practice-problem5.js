function leastCommonChar(str) {
  let obj = {};
  str.toLowerCase().split('').forEach(element => {
    if (!obj[element]) obj[element] = 1;
    else obj[element] += 1;
  });
  let sortedObj = Object.entries(obj).sort((a, b) => a[1] - b[1]);
  let smallestNumber = sortedObj[0][1];
  let filterEqual = sortedObj.filter((element) => element[1] === smallestNumber)
    .map(element => element[0]);
  let letter = str.toLowerCase().split('').find(letter => filterEqual.includes(letter));
  return letter;
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".