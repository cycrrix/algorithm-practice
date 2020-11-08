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
var inorderTraversal = function (root) {
  var result = [];
  recursion(root, result);
  return result;
  function recursion(root, result) {
    if (root === null) return;
    recursion(root.left, result);
    result.push(root.val);
    recursion(root.right, result);
  }
};

/**
 * 迭代实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var result = [];
  var stack = [];
  var curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};

console.log(
  inorderTraversal({
    val: 1,
    left: null,
    right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  })
);

/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树，返回它的中序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 * 输出: [1,3,2]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 迭代算法思路
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/die-dai-fa-by-jason-2/
 */
