// First in First Out

class Queue {
  constructor () {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  add (item) {
    this.data[this.tail] = item;
    this.tail++;
    return this;
  }

  remove () {
    if (this.head === this.tail) return;
    return this.data[this.head++];
  }
}
