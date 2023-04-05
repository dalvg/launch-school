class Triangle  {

  constructor(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) throw new Error('Invalid side length');

    let sideSort = [side1, side2, side3].sort((a, b) => a - b);
    if (this.checkInvalid(sideSort)) {
      throw new Error('Invalid side length');
    }
    if (sideSort[0] + sideSort[1] <= sideSort[2]) throw new Error('Not a valid triangle');

    this.side1 = sideSort[0];
    this.side2 = sideSort[1];
    this.side3 = sideSort[2];
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3 ) {
      return `equilateral`;
    } else if (this.side1 === this.side2 || this.side2 === this.side3) {
      return 'isosceles';
    } else {
      return `scalene`;
    }
  }

  checkInvalid(sideArr) {
    let [side1, side2, side3] = sideArr;
    if ((side1 <= 0 || side2 <= 0 || side3 <= 0) ||
            (side1 + side2 <= side3)) return true;
    else return false;
  }
}

module.exports = Triangle;