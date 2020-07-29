/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head ===null) {
    return null;
  }
  //第一步，在每个原节点后面创建一个新节点
  //1->1'->2->2'->3->3'
  let curr = head;
  while(curr!==null){
    const newNode= new Node(curr.val);
    newNode.next=curr.next;
    curr.next = newNode;
    curr = newNode.next;
  }
  //第二步，设置新节点的随机节点
  curr = head;
  while (curr!==null) {
    if (curr.random!==null) {
      curr.next.random =curr.random.next;
    }
    curr= curr.next.next;
  }
  //第三步，将两个链表分离
  curr=head;
  const copyHead = new Node(0);
  let copyCurr = copyHead;
  while (curr!==null) {
    // extract the copy
    copyCurr.next =curr.next;
    copyCurr = copyCurr.next;
    // restore the original list
    curr.next = curr.next.next;
    
    curr = curr.next;
  }
  return copyHead.next;
};

/**
 * 剑指 Offer 35. 复杂链表的复制
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * 题解
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/liang-chong-shi-xian-tu-jie-138-fu-zhi-dai-sui-ji-/
 */
