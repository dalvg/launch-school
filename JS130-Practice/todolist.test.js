const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist to array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('todofirst', () => {
    expect(list.first()).toBe(todo1);
  });

  test('todo last', () => {
    expect(list.last()).toBe(todo3);
  });

  test('todo shift', () => {
    let shifted = list.todos[0];
    expect(list.shift()).toBe(shifted);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('todo pop', () => {
    let popped = list.pop();
    expect(popped).toEqual(todo3);
    expect(list.todos).toEqual([todo1, todo2]);
  });

  test('todo isDone', () => {
    expect(list.isDone()).toBe(false);
  });

  test('todo add', () => {
    expect(() => list.add(5)).toThrow();
  });

  test('todo itemAt', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(7)).toThrow();
  });

  test('todo markDoneAt', () => {
    expect(() => list.markDoneAt(8)).toThrow();
    list.markDoneAt(0);
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(false);
    expect(todo3.done).toBe(false);
  });

  test('todo markUndone', () => {
    expect(() => list.markUndoneAt(8)).toThrow();
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();

    list.markUndoneAt(0);
    expect(todo1.done).toBe(false);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  });

  test('todo markAllDone', () => {

    list.markAllDone();

    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  });

  test('todo remove', () => {
    expect(() => list.removeAt(8)).toThrow();

    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('toString completed', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  test('toString all done', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('todo forEach', () => {
    list.markAllUndone();
    let markAll = list.markAllDone.bind(list);
    list.forEach(markAll);
    expect(todo1.isDone()).toBe(true);
  });

  test('todo filter', () => {
    let newList = new TodoList(list.title);
    todo1.markDone();
    newList.add(todo1);

    expect(newList.title).toBe(list.title);

    let done = list.filter(todo => todo.isDone());
    expect(done.toString()).toBe(newList.toString());
  });

});