class SumOfMultiples {

  constructor(...args) {
    this.numberSet = args;
  }

  to(number) {
    let result = [];
    this.numberSet.forEach(element => {
      for (let start = element; start < number; start += element) {
        if (start % element === 0 && !result.includes(start)) result.push(start);
      }
    });
    return result.reduce((acc, cur) => acc + cur, 0);
  }

  static to(number) {
    return new SumOfMultiples(3, 5).to(number);
  }
}

module.exports = SumOfMultiples;
