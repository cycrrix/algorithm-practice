const defaultCmp = (x, y) => x < y; // 默认是小顶堆

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
  /**
   * 默认是最大堆
   * @param {Function} cmp
   */
  constructor(cmp = defaultCmp) {
    this.container = [];
    this.cmp = cmp;
  }

  // 插入
  insert(data) {
    const { container, cmp } = this;

    container.push(data);
    let index = container.length - 1;
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (!cmp(container[index], container[parent])) {
        return;
      }
      swap(container, index, parent);
      index = parent;
    }
  }

  // 删除
  delete() {
    const { container, cmp } = this;
    if (!container.length) {
      return null;
    }

    swap(container, 0, container.length - 1);
    const res = container.pop();
    const length = container.length;
    let index = 0,
      exchange = index * 2 + 1;

    while (exchange < length) {
      // // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }
}

/**
 * 堆（优先队列）
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k === 0) {
    return [];
  }
  // 使用一个最大堆（大顶堆）
  // 使用自己实现的二叉堆，默认是小顶堆，添加 comparator 参数使其变成最大堆
  const heap = new Heap((x, y) => x > y);
  for (let i = 0; i < arr.length; i++) {
    // 堆大小小于k个或者当前数字小于堆顶元素才会入堆
    if (heap.container.length < k || arr[i] < heap.container[0]) {
      heap.insert(arr[i]);
    }
    if (heap.container.length > k) {
      heap.delete();
    }
  }
  return heap.container;
};

/**
 * 快排
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {};
