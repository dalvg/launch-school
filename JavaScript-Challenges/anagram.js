class Anagram {

  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(arr) {
    let result = arr.filter(otherWord => {
      return otherWord.toLowerCase() !== this.word &&
        this.checkMatch(otherWord.toLowerCase());
    });
    return result;
  }

  checkMatch(otherWord) {
    let sortedWord = this.word.split('').sort().join('');
    let otherSortedWord = otherWord.split('').sort().join('');
    return sortedWord === otherSortedWord;
  }
}

module.exports = Anagram;