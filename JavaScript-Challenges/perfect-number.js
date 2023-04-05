class PerfectNumber {

  constructor(number) {
    this.number = number;
  }

  classify()  {
    if (this.number < 1) throw new Error('Invalid number');
    let divisors = this.findDivisors();
    let sum = divisors.reduce((acc, cur) => acc + cur, 0);
    if (sum === this.number) return 'perfect';
    else if (sum > this.number) return 'abundant';
    else return 'deficient';
  }

  static classify(number) {
    return new PerfectNumber(number).classify();
  }

  findDivisors() {
    let array = [];
    for (let count = 1; count < this.number; count += 1) {
      if (this.number % count === 0) array.push(count);
    }
    return array;
  }
}

module.exports = PerfectNumber;