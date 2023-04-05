class Robot {
  constructor() {
    this.id = this.nameRobot();
  }

    static letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static names = [];

    name() {
      return this.id;
    }

    nameRobot() {
      while (true) {
        let twoLetters = this.generateLetters();
        let threeNumbers = this.generateNumbers();
        let randomName = twoLetters + threeNumbers;
        if (!Robot.names.includes(randomName)) {
          Robot.names.push(randomName);
          return randomName;
        }
      }
    }

    generateLetters() {
      let result = '';
      for (let count = 0; count < 2; count += 1) {
        let index = Math.floor(Math.random() * 27);
        result += Robot.letters[index];
      }
      return result;
    }

    generateNumbers() {
      let result = '';
      for (let count = 0; count < 3; count += 1) {
        let number = Math.floor(Math.random() * 10);
        result += number;
      }
      return result;
    }

    reset() {
      let nameIndex = Robot.names.indexOf(this.id);
      Robot.names.splice(nameIndex, 1);
      this.id = this.nameRobot();
    }

}

module.exports = Robot;