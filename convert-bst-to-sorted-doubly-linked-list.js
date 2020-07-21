/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let pre = null;
  let head = null;
  if (root === null) {
    return null;
  }
  recur(root);
  head.left = pre;
  pre.right = head;
  return head;

  function recur(curr) {
    if (curr === null) {
      return;
    }
    recur(curr.left);
    if (pre === null) {
      head = curr;
    } else {
      pre.right = curr;
      curr.left = pre;
    }
    pre = curr;
    recur(curr.right);
  }
};

/**
 * 剑指 Offer 36. 二叉搜索树与双向链表
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
 * 思路
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/mian-shi-ti-36-er-cha-sou-suo-shu-yu-shuang-xian-5/
 */
