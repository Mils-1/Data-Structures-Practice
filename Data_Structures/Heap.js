class HeapPQ {
  constructor() {
    this.heap = [];
  }
  getLeftChildIdx(parentIdx) {
    return 2 * parentIdx + 1;
  }
  getRightChildIdx(parentIdx) {
    return 2 * parentIdx + 2;
  }
  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  getPriority(idx) {
    return this.heap[idx].priority;
  }
  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne]
    ];
  }
  peekMax() {
    return this.heap[0].data;
  }
  popMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    //this.heap.splice(0, 1, this.heap.pop());
    return max;
  }
  insert(data, priority) {
    this.heap.push({ data, priority });
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIdx = this.heap.length - 1;
    while (
      currentIdx > 0 &&
      this.heap[currentIdx].priority >
        this.heap[this.getParentIdx(currentIdx)].priority
    ) {
      this.swap(currentIdx, this.getParentIdx(currentIdx));
      currentIdx = this.getParentIdx(currentIdx);
    }
  }
  heapifyDown() {
    let currentIdx = 0;
    let leftIdx = this.getLeftChildIdx(currentIdx);
    let rightIdx = this.getRightChildIdx(currentIdx);
    let largerIdx;
    while (leftIdx < this.heap.length) {
      if (rightIdx < this.heap.length) {
        largerIdx =
          this.getPriority(leftIdx) >= this.getPriority(rightIdx)
            ? leftIdx
            : rightIdx;
      } else {
        largerIdx = leftIdx;
      }
      if (this.getPriority(currentIdx) < this.getPriority(largerIdx)) {
        this.swap(largerIdx, currentIdx);
        currentIdx = largerIdx;
        leftIdx = this.getLeftChildIdx(currentIdx);
        rightIdx = this.getRightChildIdx(currentIdx);
      } else return;
    }
  }
}
