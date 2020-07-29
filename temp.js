/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} curr
 * @return {ListNode}
 */
var reverseList = function(curr) {
  if (curr===null||curr.next===null) {
    return curr
  }
  const tail = reverseList(curr.next);
  curr.next.next = curr;
  curr.next=null;
  return tail;
};