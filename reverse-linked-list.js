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
