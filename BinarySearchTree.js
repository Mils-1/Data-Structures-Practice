class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert (value) {
    const direction = this.value > value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(value);
    else this[direction] = new BinarySearchTree(value);
  }
  contains (value) {
    if (this.value === value) return true;
    const direction = this.value > value ? 'left' : 'right';
    if (this[direction]) return this[direction].contains(value);
    return false;
  }
}

let tree = new BinarySearchTree(25);
