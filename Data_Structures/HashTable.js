class AListNode {
  constructor (key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class AList {
  constructor () {
    this.head = null;
  }
  set (key, value) {
    this.head = new AListNode(key, value, this.head);
    return this;
  }
  get (key) {
    let currentNode = this.head;
    while (currentNode) { // we have finished traversing the list when currentNode is null
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return `That key couldn't be found`;
  }
}

// HashTable that handles collisions with the use of lists at each hash index

const numBuckets = 20;

function hash (key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % numBuckets;
}

class HashTable {
  constructor () {
    this.buckets = new Array(numBuckets);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new AList();
    }
  }
  set (key, value) {
    this.buckets[hash(key)].set(key, value);
    return this;
  }
  get (key) {
    return this.buckets[hash(key)].get(key);
  }
}
