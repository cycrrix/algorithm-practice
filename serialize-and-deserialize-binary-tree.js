/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (pRoot, arr = []) {
  if (!pRoot) {
    arr.push("#");
  } else {
    arr.push(pRoot.val);
    serialize(pRoot.left, arr);
    serialize(pRoot.right, arr);
  }
  return arr.join(",");
};
console.log(
  serialize({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: {
      val: 3,
      left: { val: 4, right: null, left: null },
      right: { val: 5, right: null, left: null },
    },
  })
);

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
