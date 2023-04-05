class BeerSong {

  static verse(bottleCount) {
    if (bottleCount === 0) {
      return "No more bottles of beer on the wall, no more " +
                "bottles of beer.\nGo to the store and buy some " +
                "more, 99 bottles of beer on the wall.\n";
    } else {
      return `${bottleCount} ${bottleCount === 1 ? 'bottle' : 'bottles'} of beer on the wall, ${bottleCount} ${bottleCount === 1 ? 'bottle' : 'bottles'} of beer.\n` +
                `Take ${bottleCount === 1 ? 'it' : 'one'} down and pass it around, ${BeerSong.calculateBottle(bottleCount)} of beer on the wall.\n`;
    }
  }

  static calculateBottle(bottleCount) {
    if (bottleCount - 1 === 0 ) return 'no more bottles';
    else if (bottleCount - 1 === 1) return '1 bottle';
    else return `${bottleCount - 1} bottles`;
  }

  static verses(...args) {
    let result = [];
    let end = args[1] !== undefined ? args[1] : args[0];
    for (let start = args[0]; start >= end; start -= 1) {
      result.push(BeerSong.verse(start));
    }
    return result.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}
module.exports = BeerSong;