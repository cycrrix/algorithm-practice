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

/**
 * 剑指 Offer 57 - II. 和为s的连续正数序列
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 示例 1：
 * 输入：target = 9
 * 输出：[[2,3,4],[4,5]]
 * 
 * 示例 2：
 * 输入：target = 15
 * 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 * 
 * 题解：
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/shi-yao-shi-hua-dong-chuang-kou-yi-ji-ru-he-yong-h/
 */