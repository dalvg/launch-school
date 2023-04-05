class Diamond {
    static alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    static makeDiamond(letter) {
      let endPadding = Diamond.alphabet.indexOf(letter);
      let finalIndex = endPadding;
      let middlePadding = 1;
      let result = [];
      for (let idx = 0; idx <= finalIndex; idx += 1) {
        if (idx === 0) {
          result.push(' '.repeat(endPadding) +
                Diamond.alphabet[idx] + ' '.repeat(endPadding) + '\n');
          endPadding -= 1;
          continue;
        } else {
          result.push(' '.repeat(endPadding) +
                Diamond.alphabet[idx] + ' '.repeat(middlePadding) +
                Diamond.alphabet[idx] + ' '.repeat(endPadding) + '\n');
        }
        endPadding -= 1;
        middlePadding += 2;
      }

      let reverseResult = result.slice().reverse();
      let final = result.concat(reverseResult.slice(1));

      return final.join('');

    }
}
module.exports = Diamond;