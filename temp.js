/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head === null) {
    return null;
  }
  if (head.val === val) {
    return head.next;
  }
  var curr = head;
  while (curr.next !== null && curr.next.val !== val) {
    curr = curr.next;
  }
  if (curr.next !== null) {
    curr.next = curr.next.next;
  }
  return head;
};
