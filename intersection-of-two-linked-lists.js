/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  //boundary check
  if (headA === null || headB === null) {
    return null;
  }
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA !== nodeB) {
    nodeA = nodeA !== null ? nodeA.next : headB;
    nodeB = nodeB !== null ? nodeB.next : headA;
  }
  return nodeA;
};

/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 * 思路
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/shuang-zhi-zhen-fa-lang-man-xiang-yu-by-ml-zimingm/
 * 代码
 * https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Java-solution-without-knowing-the-difference-in-len!
 */
