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
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.A = new Heap(); // 默认为小顶堆，保存较大的一半
  this.B = new Heap((x, y) => x > y); // 大顶堆，保存较小的一半
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.A.container.length !== this.B.container.length) {
    this.A.insert(num);
    this.B.insert(this.A.delete());
  } else {
    this.B.insert(num);
    this.A.insert(this.B.delete());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return this.A.container.length !== this.B.container.length
    ? this.A.container[0]
    : (this.A.container[0] + this.B.container[0]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * 剑指 Offer 41. 数据流中的中位数
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 * 例如，
 * [2,3,4] 的中位数是 3
 * [2,3] 的中位数是 (2 + 3) / 2 = 2.5
 * 设计一个支持以下两种操作的数据结构：
 * void addNum(int num) - 从数据流中添加一个整数到数据结构中。
 * double findMedian() - 返回目前所有元素的中位数。
 *
 * 示例：
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3)
 * findMedian() -> 2
 *
 * 题解：
 * https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/mian-shi-ti-41-shu-ju-liu-zhong-de-zhong-wei-shu-y/
 * javascript二叉堆实现：
 * https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/solution/tu-xie-zheng-li-bao-li-fa-er-fen-cha-zhao-shou-don/
 */
