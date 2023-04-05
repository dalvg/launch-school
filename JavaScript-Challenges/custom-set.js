class CustomSet {

  constructor(arr = []) {
    for (let element of arr) {
      if (this[element]) continue;
      else this[element] = element;
    }
  }

  isEmpty() {
    let count = 0;
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) count += 1;
    }
    return count === 0;
  }

  contains(value) {
    return this.hasOwnProperty(value);
  }

  isSubset(otherSet) {
    for (let prop in this) {
      if (!otherSet.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  isDisjoint(otherSet) {
    let count = 0;
    for (let prop in this) {
      if (otherSet.hasOwnProperty(prop)) {
        count += 1;
        break;
      }
    }
    return count === 0;
  }

  getSize(set) {
    let count = 0;
    for (let prop in set) {
      if (set.hasOwnProperty(prop)) count += 1;
    }
    return count;
  }

  isSame(otherSet) {
    let originalSetSize = this.getSize(this);
    let otherSetSize = this.getSize(otherSet);
    if (originalSetSize !== otherSetSize) return false;
    else {
      for (let prop in this) {
        if (!otherSet.hasOwnProperty(prop)) return false;
      }
    }
    return true;
  }

  add(value) {
    if (!this[value]) this[value] = value;
    return this;
  }

  intersection(otherSet) {
    let intersections = new CustomSet();
    for (let prop in this) {
      if (otherSet.hasOwnProperty(prop)) intersections.add(prop);
    }
    return intersections;
  }

  difference(otherSet) {
    let difference = new CustomSet();
    for (let prop in this) {
      if (this.hasOwnProperty(prop) && !otherSet.hasOwnProperty(prop)) {
        difference.add(prop);
      }
    }
    return difference;
  }
  union(otherSet) {
    let union = new CustomSet();
    for (let prop in this) {
      union.add(prop);
    }
    for (let prop in otherSet) {
      union.add(prop);
    }
    return union;
  }

}

module.exports = CustomSet;