class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add ToDo objects');
    } else this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  last() {
    return this.todos[this.todos.length - 1 ];
  }

  first() {
    return this.todos[0];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) throw new ReferenceError(`invalid index ${index}`);
  }

  markDoneAt(index) {
    return this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    return this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    let object = this.todos[index];
    this.todos.splice(index, 1);
    return object;
  }

  toString() {
    console.log(`--- ${this.title} ---`);
    let list = this.todos.map(todo => todo.toString()).join('\n');
    return list;
  }

  forEach(callback) {
    for (let idx = 0; idx < this.todos.length; idx += 1) {
      callback(this.todos[idx]);
    }
  }

  filter(callback) {
    let result = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) result.add(todo);
    });
    return result;
  }

  findByTitle(title) {
    let result = this.filter(todo =>
      todo.title === title);
    return result.first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    let result = this.findByTitle(title);
    if (result !== undefined) result.markDone();
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

class Todo {
   static DONE_MARKER = 'X';
   static UNDONE_MARKER = ' ';

   constructor(title) {
     this.title = title;
     this.done = false;
   }

   toString() {
     let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
     return `[${marker}] ${this.title}`;
   }

   markDone() {
     this.done = true;
   }

   markUndone() {
     this.done = false;
   }

   isDone() {
     return this.done;
   }

   getTitle() {
     return this.title;
   }

}
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);