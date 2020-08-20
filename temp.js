const defaultCmp = (x, y) => x < y;
const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};
class Heap {
  constructor(cmp = defaultCmp) {
    this.container = [];
    this.cmp = cmp;
  }
  insert(num) {
    const { container, cmp } = this;
    container.push(num);
    let index = container.length - 1;
    while (index) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (!cmp(container[index], container[parentIndex])) {
        break;
      }
      cmp(container, index, parentIndex);
      index = parentIndex;
    }
  }
  delete() {
    const { container, cmp } = this;
    if (container.length === 0) {
      return null;
    }
    swap(container, 0, container.length - 1);
    const result = container.pop();
    let index = 0,
      exchange = index * 2 + 1;
    while (exchange < length) {
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, index, exchange);
      index = exchange;
    }
    return result;
  }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.A = new Heap();
  this.B = new Heap((x, y) => x - y);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const { A, B } = this;
  if (A.container.length !== B.container.length) {
    A.insert(num);
    B.insert(A.delete());
  } else {
    B.insert(num);
    A.insert(B.delete());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const { A, B } = this;
  return A.container.length !== B.container.length
    ? A.container[0]
    : (A.container[0] + B.container[0]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
