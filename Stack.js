// Last In First Out

class Stack {
  constructor () {
    this.stack = [];
    this.head = 0;
    this.tail = 0;
  }

  add (item) {
    this.stack[this.tail] = item;
    this.tail++;
    return this;
  }

  remove () {
    if (this.head === this.tail) return;
    return this.stack[--this.tail];
  }
}
