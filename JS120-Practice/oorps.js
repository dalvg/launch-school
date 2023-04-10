const read = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    this.human.moves.push(humanMove);
    this.computer.moves.push(computerMove);

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.human.score += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie");
    }
  },

  displayWelcomeMessage() {
    console.log('welcome');
  },

  displayGoodbyeMessage() {
    console.log('goodbye');
  },

  checkWinner() {
    console.log(`computer : ${this.computer.score} human: ${this.human.score}`);
    if (this.computer.score === 5) return 'computer';
    else if (this.human.score === 5) return 'you';
    else return null;
  },

  displayMoves() {
    console.log(`computer moves ${this.showMoves(this.computer.moves)} 
human moves ${this.showMoves(this.human.moves)}`);
  },

  showMoves(arr) {
    return arr.join(' ');
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayMoves();

      let haveWinner = this.checkWinner();
      if (haveWinner) {
        console.log(`${haveWinner} won the whole game!`);
        this.displayGoodbyeMessage();
        if (!playagain()) break;
      }

    }
  },
};

function playagain() {
  console.log('Woudl you like to play again ? y/n');
  let answer = read.question();
  return answer.toLowerCase()[0] === 'y';
}

function keepTrack() {
  return {
    moves : [],
  };
}

function createComputer() {
  let playerObject = createPlayer();
  let moves = keepTrack();

  let computerObject = {
    score : 0,
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    }
  };

  return Object.assign(playerObject, computerObject, moves);
}

function createPlayer() {
  return {
    move : null,
  };
}

function createHuman() {
  let playerObject = createPlayer();
  let moves = keepTrack();

  let humanObject = {
    score : 0,
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = read.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice');
      }
      this.move = choice;
    }
  };
  return Object.assign(playerObject, humanObject, moves);
}


RPSGame.play();

