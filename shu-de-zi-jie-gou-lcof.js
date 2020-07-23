/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 判断树B是树A的子结构
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
 * 判定树A是否包含树B，从两棵树的根节点开始比较
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
