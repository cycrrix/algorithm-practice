/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head===null) {
    return null
  }
  let pre = null;
  let curr = head;
  while(curr!==null){
    let temp = curr.next;
    curr.next = pre;
  }
};