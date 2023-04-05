class RomanNumeral {

  constructor(number) {
    this.number = number;
    this.numberString = this.number.toString();
  }

    static reference = {
      1 : 'I',
      2 : 'II',
      3 : 'III',
      4 : 'IV',
      5 : 'V',
      6 : 'VI',
      7 : 'VII',
      8 : 'VIII',
      9 : 'IX',
      10 : 'X',
      40 : 'XL',
      50 : 'L',
      90 : 'XC',
      100 : 'C',
      400 : 'CD',
      500 : 'D',
      900 : 'CM',
      1000 : 'M',
    }

    static referenceKeys = Object.keys(RomanNumeral.reference);
    static reverseReferenceKeys = RomanNumeral.referenceKeys.reverse();

    toRoman() {
      if (RomanNumeral.referenceKeys.includes(this.numberString)) {
        return RomanNumeral.reference[this.numberString];
      } else {
        let tempNumber = this.number;
        let result = '';
        while (tempNumber !== 0) {
          for (let idx = 0; idx < RomanNumeral.reverseReferenceKeys.length; idx += 1) {
            let romanNumber = Number(RomanNumeral.reverseReferenceKeys[idx]);
            let count = tempNumber / romanNumber;
            if (parseInt(count, 10) > 0) {
              result += RomanNumeral.reference[RomanNumeral.reverseReferenceKeys[idx]].repeat(count);
              tempNumber -= (romanNumber * parseInt(count, 10));
            }
          }
        }
        return result;
      }
    }


}

module.exports = RomanNumeral;