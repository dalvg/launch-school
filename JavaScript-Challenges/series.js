class Series {
  constructor(digits) {
    this.digits = digits;
  }
  slices(len) {
    if (len > this.digits.length) throw new Error('too long of series');

    let result = [];
    for (let idx = 0; idx <= this.digits.length - len; idx += 1) {
      result.push(this.digits.slice(idx, idx + len).split('').map(element => +element));
    }
    return result;
  }
}

module.exports = Series;