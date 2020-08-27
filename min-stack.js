/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.A = []; // 数据栈
  this.B = []; // 辅助栈
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let { A, B } = this;
  A.push(x);
  if (B.length === 0 || B[B.length - 1] >= x) {
    B.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let { A, B } = this;
  if (A.pop() === B[B.length - 1]) {
    B.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.A[this.A.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.B[this.B.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

/**
 * 剑指 Offer 30. 包含min函数的栈
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 *
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 *
 * 题解：
 * https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/
 */
