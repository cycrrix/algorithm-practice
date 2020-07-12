/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root) {
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    mirrorTree(root.right);
    mirrorTree(root.left);
  }
  return root;
};

/**
 * 剑指 Offer 27. 二叉树的镜像
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * 例如输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 镜像输出：
 *
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 示例 1：
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 解法思路：
 * http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%95%9C%E5%83%8F.html#%E9%A2%98%E7%9B%AE
 */
