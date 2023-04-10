function minimumNumber(numbers) {
  let value = numbers.reduce((acc, cur) => acc + cur);
  let minimum = 0;
  let prime;

  do {
    prime = true;
    for (let count = 2; count < Math.sqrt(value); count += 1) {
      if (value % count === 0) {
        prime = false;
        minimum += 1;
        break;
      }
    }
    value += 1;
  } while (!prime);

  return minimum;
}

console.log(minimumNumber([3,1,2]));
console.log(minimumNumber([50,39,49,6,17,28]));
console.log(minimumNumber([5,2]));