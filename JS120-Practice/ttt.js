let readline = require('readline-sync');
class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }
  toString() {
    return this.marker;
  }
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

}
class Board {
  constructor() {
    this.squares = {};
    for (let idx = 1; idx < 10; idx += 1) {
      this.squares[idx] = new Square();
    }
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(element => this.squares[element].isUnused());
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  boardIsFull() {
    return this.unusedSquares().length === 0;
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(` ${this.squares['1']}   | ${this.squares['2']}   |  ${this.squares['3']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(` ${this.squares['4']}   | ${this.squares['5']}   |  ${this.squares['6']}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(` ${this.squares['7']}   | ${this.squares['8']}   |  ${this.squares['9']}`);
    console.log("     |     |");
    console.log("");
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
    }

    this.displayResults();
    this.displayGoodByeMessage();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe');
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();

      choice = readline.question(`Choose a square between ${validChoices.join(' ')} `);

      if (validChoices.includes(choice)) break;

      console.log('sorry not a valid choice try again');
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      console.log('comptuer move');
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('you won');
    } else if (this.isWinner(this.computer)) {
      console.log('computer won');
    } else {
      console.log('it is a tie');
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  displayGoodByeMessage() {
    console.log('Thanks for playing Tic Tac Toe');
  }

  gameOver() {
    return this.board.boardIsFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}

let game = new TTTGame();
game.play();


