/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归，效率低
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const result = [];
  recur(root, result);
  return result[k - 1];
  function recur(root, result) {
    if (root !== null) {
      if (root.left !== null) {
        recur(root.left, result);
      }
      result.push(root.val);
      if (root.right !== null) {
        recur(root.right, result);
      }
    }
  }
};

/**
 * 递归优化：剪枝
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  var count = 0;
  var result = 0;
  recur(root);
  return result;
  function recur(root) {
    if (root !== null) {
      if (root.left !== null) {
        recur(root.left);
      }
      count++;
      if (count === k) {
        result = root.val;
        return; // 剪枝
      } else if (count > k) {
        return; // 剪枝
      }
      if (root.right !== null) {
        recur(root.right);
      }
    }
  }
};

/**
 * 迭代
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    if (--k === 0) {
      return curr.val;
    }
    curr = curr.right;
  }
};

/**
 * 二叉搜索树的第k个节点
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 *
 * 说明：
 * 你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
 *
 * 示例 1:
 * 输入: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 *  1   4
 *   \
 *    2
 * 输出: 1
 *
 * 示例 2:
 * 输入: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * 输出: 3
 * 进阶：
 * 如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？
 * 解法思路：BST的中序遍历是升序序列。
 * 1.递归后获取k-1
 * 2.迭代时，出栈k次
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/er-cha-sou-suo-shu-zhong-di-kxiao-de-yuan-su-by-le/
 */
