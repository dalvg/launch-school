class Element {
  constructor(value, nextElement = null) {
    this.value = value;
    this.nextElement = nextElement;
  }

  datum() {
    return this.value;
  }

  next() {
    let context = this.nextElement;
    return context;
  }

  isTail() {
    return this.nextElement === null;
  }
}

class SimpleLinkedList {

  size() {
    let count = 0;
    let current = this.head();
    while (current) {
      count += 1;
      current = current.next();
    }
    return count;
  }

  isEmpty() {
    return !this.head();
  }

  push(elementValue) {
    let element = new Element(elementValue, this.head());
    this.headElement = element;
  }

  pop() {
    let value = this.headElement.value;
    this.headElement = this.headElement.next();
    return value;
  }

  peek() {
    return this.headElement ? this.headElement.value : null;
  }

  head() {
    return this.headElement || null;
  }

  static fromArray(arr) {
    if (arr === null) arr = [];

    let list = new SimpleLinkedList();

    for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
      list.push(arr[idx]);
    }

    return list;
  }

  toArray() {
    let result = [];
    let current = this.head();
    while (current) {
      result.push(current.value);
      current = current.next();
    }
    return result;
  }

  reverse() {
    let listSize = this.size();

    let reverseList = new SimpleLinkedList();
    let temp;

    for (let idx = 0; idx < listSize; idx += 1) {
      if (idx === 0) {
        temp = this.head().next();
        reverseList.push(this.head().value);
        continue;
      }
      reverseList.push(temp.value);
      temp = temp.next();
    }

    return reverseList;
  }

}

module.exports = {Element, SimpleLinkedList};