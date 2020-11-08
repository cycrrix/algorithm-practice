/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 先序遍历树 AA 中的每个节点 nA
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 树A为空或者树B为空，则树B不是树A的子结构
  if (A === null || B === null) {
    return false;
  }
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

/**
 * 前序遍历，从两棵树的根节点开始比较,判断树A中以nA为根节点的子树是否包含树B。
 * @param {*} A
 * @param {*} B
 */
function recur(A, B) {
  if (B === null) {
    return true;
  }
  if (A === null || A.val !== B.val) {
    return false;
  }
  return recur(A.left, B.left) && recur(A.right, B.right);
}

/**
 * 剑指 Offer 26. 树的子结构
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 * 例如:
 * 给定的树 A:
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 * 给定的树 B：
 *    4
 *   /
 *  1
 * 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。
 * 示例 1：
 * 输入：A = [1,2,3], B = [3,1]
 * 输出：false
 * 示例 2：
 * 输入：A = [3,4,5,1,2], B = [4,1]
 * 输出：true
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
 */
