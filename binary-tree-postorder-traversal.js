/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  var result = [];
  recursion(root, result);
  return result;
  function recursion(root, result) {
    if (root !== null) {
      if (root.left !== null) {
        recursion(root.left, result);
      }
      if (root.right !== null) {
        recursion(root.right, result);
      }
      result.push(root.val);
    }
  }
};

/**
 * 迭代实现
 * 我们可以用与前序遍历相似的方法完成后序遍历，后序遍历与前序遍历相对称。先序遍历采用根*右左*（先遍历右子树再遍历左子树），逆序列：左右根
 * 思路： 每到一个节点 A，就应该立即访问它。 然后将左子树压入栈，再次遍历右子树。遍历完整棵树后，结果序列逆序即可。
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  var result = [];
  var stack = [];
  var curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      result.push(curr.val);
      stack.push(curr.left);
      curr = curr.right;
    }
    curr = stack.pop();
  }
  return result.reverse();
};

console.log(
  postorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  })
);

/**
 * 145. 二叉树的后序遍历
 * 给定一个二叉树，返回它的后序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 * 输出: [3,2,1]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 我们可以用与前序遍历相似的方法完成后序遍历，后序遍历与前序遍历相对称。
 * 迭代思路： 每到一个节点 A，就应该立即访问它。 然后将左子树压入栈，再次遍历右子树。遍历完整棵树后，结果序列逆序即可。
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/die-dai-fa-by-jason-2/
 */
