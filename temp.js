var kthSmallest = function (root, k) {
  var result = 0;
  var count = 0;
  recur(root);
  return result;
  function recur(root) {
    if (root !== null) {
      if (root.left !== null) {
        recur(root.left);
      }
      count++;
      if (count === k) {
        ans = node.val;
      } else if (count > k) {
        return; //剪枝
      }
      result.push(root.val);
      if (root.right !== null) {
        recur(root.right);
      }
    }
  }
};
