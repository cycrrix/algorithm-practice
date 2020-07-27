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
  function recur(node) {
    if (node === null) {
      return;
    }
    recur(node.next);
    res.push(node.val);
  }
};

/**
 * 迭代：因为每次调用unshift方法，都会从数组头部插入，时间复杂度
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res=[]
  let curr=head;
  while(curr!==null){
    res.unshift(curr.val);
    curr=curr.next;
  }
  return res;
};
