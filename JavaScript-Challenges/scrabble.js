class Scrabble {

  constructor(word) {
    this.word = this.checkValidWord(word);
  }

  checkValidWord(word) {
    return word === String(word) ? word.toUpperCase() : '';
  }

  static pointValue = {
    AEIOULNRST : 1,
    DG : 2,
    BCMP : 3,
    FHVWY : 4,
    K : 5,
    JX : 8,
    QZ : 10,
  }

  static pointsKey = Object.keys(Scrabble.pointValue);

  score() {
    let total = 0;
    for (let idx = 0; idx < this.word.length; idx += 1) {
      let letter = this.word[idx];
      for (let idx2 = 0; idx2 < Scrabble.pointsKey.length; idx2 += 1) {
        let letterGroup = Scrabble.pointsKey[idx2];
        if (letterGroup.includes(letter)) total
          += Scrabble.pointValue[letterGroup];
      }
    }
    return total;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;