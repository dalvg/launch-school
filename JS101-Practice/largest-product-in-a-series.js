function greatestProduct(input) {
  let highest = [];

  for (let idx = 0; idx < input.length - 4; idx += 1) {
    let numbers = input.slice(idx, idx + 5);
    let product = numbers.split('').reduce((acc, cur) => acc * Number(cur));
    highest.push(product);
  }
  return highest.sort((a,b) => a - b).pop();
}
console.log(greatestProduct("123834539327238239583"));
console.log(greatestProduct('92494737828244222221111111532909999'));