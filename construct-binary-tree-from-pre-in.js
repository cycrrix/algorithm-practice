/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0])
  }
  const val = preorder[0];
  const index = inorder.indexOf(val);
  const inLeft = inorder.slice(0,index);
  const inRight = inorder.slice(index+1);
  const preLeft = preorder.slice(1,index+1);
  const preRight = preorder.slice(index+1);
  const node = new TreeNode(val);
  node.left = buildTree(preLeft,inLeft);
  node.right = buildTree(preRight,inRight);
  return node;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
console.log(
  JSON.stringify(
    reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6])
  )
);
/**
 * 剑指 Offer 07. 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如，给出
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * 思路：
 * http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E9%87%8D%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%A2%98%E7%9B%AE1-%E4%BA%8C%E5%8F%89%E6%A0%91%E9%87%8D%E5%BB%BA
 */
