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
var serialize = function (root) {
  const res = [];
  buildString(root, res);
  return res.join(",");
  function buildString(root, res) {
    if (root === null) {
      res.push("X");
      return;
    }
    res.push(root.val);
    buildString(root.left,res);
    buildString(root.right,res);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) {
    return null;
  }
  return buildTree(data.split(","));
  function buildTree(list) {
    const curr = list.shift();
    if (curr === "X") {
      return null;
    }
    const node = new TreeNode(curr);
    node.left = buildTree(list);
    node.right = buildTree(list);
    return node;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
