class Octal {
  constructor(number) {
    this.stringNumber = String(number);
  }

  toDecimal() {
    let checkNumber = this.stringNumber.match(/[0-7]/g);
    if (checkNumber === null ||
            checkNumber.join('') !== this.stringNumber) return 0;

    let result = 0;
    let revereString = this.stringNumber.split('').reverse().join('');

    for (let idx = 0; idx < revereString.length; idx += 1) {
      result += Number(revereString[idx]) * Math.pow(8, idx);
    }

    return result;
  }
}

module.exports = Octal;