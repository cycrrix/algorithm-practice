/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let curr = head;
  let temp = null;
  while (curr !== null) {
    temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
};

/**
 * 递归
 * @param {ListNode} curr
 * @return {ListNode}
 */
var reverseList = function (curr) {
  if (curr === null || curr.next === null) {
    return curr;
  }
  const tail = reverseList(curr.next);
  curr.next.next = curr;
  curr.next = null;
  return tail;
};

/**
 * 剑指 Offer 24. 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 *
 *
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 迭代思路
 * https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/
 */
