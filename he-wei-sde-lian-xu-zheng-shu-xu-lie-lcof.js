/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let left = 1; // 滑动窗口的左边界
  let right = 1; // 滑动窗口的右边界
  let sum = 0; // 滑动窗口中数字的和
  const result = [];
  while (left <= target / 2) {
    if (sum < target) {
      // 右边界向右移动
      sum += right;
      right++;
    } else if (sum > target) {
      // 左边界向右移动
      sum -= left;
      left++;
    } else {
      // 记录结果
      const arr = [];
      for (let num = left; num < right; num++) {
        arr.push(num);
      }
      result.push(arr);
      // 左边界向右移动
      sum -= left;
      left++;
    }
  }
  return result;
};
