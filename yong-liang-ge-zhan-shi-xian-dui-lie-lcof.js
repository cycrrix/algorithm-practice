var CQueue = function () {
  this.A = [];
  this.B = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.A.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 栈B不为空，B中仍有已完成倒序的元素，因此直接返回 B 的栈顶元素
  if (this.B.length !== 0) return this.B.pop();
  // 否则，当 A 为空： 即两个栈都为空，无元素
  if (this.A.length === 0) return -1;
  // 否则（B为空，A不为空），将栈 A 元素全部转移至栈 B 中，实现元素倒序
  while (this.A.length) {
    this.B.push(this.A.pop());
  }
  // 并返回栈 B 的栈顶元素
  return this.B.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

/**
 * 剑指 Offer 09. 用两个栈实现队列
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 *
 * 示例 1：
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 *
 * 示例 2：
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null,-1,null,null,5,2]
 * 题解：
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/mian-shi-ti-09-yong-liang-ge-zhan-shi-xian-dui-l-2/
 */
