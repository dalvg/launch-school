class DNA {

  constructor(code) {
    this.code = code;
  }

  hammingDistance(otherDNA) {
    let [short, long] = this.findShortLong(this.code, otherDNA);
    let count = 0;
    for (let idx = 0; idx < short.length; idx += 1) {
      if (short[idx] !== long[idx])  count += 1;
    }
    return count;
  }

  findShortLong(code, otherDNA) {
    return code.length >= otherDNA.length ? [otherDNA, code] : [code, otherDNA];
  }
}

module.exports = DNA;