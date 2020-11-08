/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 递归
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = [];
  recur(head);
  return res;
  function recur(curr) {
    if (curr === null) {
      return;
    }
    recur(curr.next);
    res.push(curr.val);
  }
};

/**
 * 迭代：因为每次调用unshift方法，都会从数组头部插入，时间复杂度较高
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = [];
  let curr = head;
  while (curr !== null) {
    res.unshift(curr.val);
    curr = curr.next;
  }
  return res;
};

/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 示例 1：
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 *
 * 题解：注意该解法为java，递归完了需要新建数组（java数组在初始化时需要指定大小），但是js不需要。
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/mian-shi-ti-06-cong-wei-dao-tou-da-yin-lian-biao-d/
 */
