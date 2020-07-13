/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  return recur(postorder, 0, postorder.length - 1);
};

function recur(postorder, start, end) {
  if (start >= end) {
    return true;
  }
  let curr = start;
  while (postorder[curr] < postorder[end]) {
    curr++;
  }
  let middle = curr;
  while (postorder[curr] > postorder[end]) {
    curr++;
  }
  return (
    curr === end &&
    recur(postorder, start, middle - 1) &&
    recur(postorder, middle, end - 1)
  );
}

/**
 * 剑指 Offer 33. 二叉搜索树的后序遍历序列
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 参考以下这颗二叉搜索树：
 *
 *      5
 *     / \
 *    2   6
 *   / \
 *  1   3
 * 示例 1：
 * 输入: [1,6,3,2,5]
 * 输出: false
 * 示例 2：
 * 输入: [1,3,2,6,5]
 * 输出: true
 * 解法思路：
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/solution/mian-shi-ti-33-er-cha-sou-suo-shu-de-hou-xu-bian-6/
 */
