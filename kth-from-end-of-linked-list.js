/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let former = head;
  let latter = head;
  for (let index = 0; index < k; index++) {
    former=former.next;
  }
  while(former!==null){
    former=former.next;
    latter=latter.next;
  }
  return latter;
};
