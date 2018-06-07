class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert (value) {
    const direction = this.value > value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(value);
    else this[direction] = new BinarySearchTree(value);
    this.magnitude++;
  }

  contains (value) {
    if (this.value === value) return true;
    const direction = this.value > value ? 'left' : 'right';
    if (this[direction]) return this[direction].contains(value);
    return false;
  }

  depthFirstForEach (func, opt = 'in-order') {
    if (opt === 'pre-order') func(this.value);
    if (this.left) this.left.depthFirstForEach(func, opt);
    if (opt === 'in-order') func(this.value);
    if (this.right) this.right.depthFirstForEach(func, opt);
    if (opt === 'post-order') func(this.value);
  }

  breadthFirstForEach (func) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      func(current.value);
    }
  }

  size () {
    return this.magnitude;
  }
}

let tree = new BinarySearchTree(25);
tree.insert(10);
tree.insert(15);
tree.insert(41);
tree.insert(26);
tree.insert(95);
tree.insert(14);

tree.contains(9);  //false
tree.contains(41); //true
