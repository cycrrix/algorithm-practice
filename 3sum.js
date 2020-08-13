/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) {
      break;
    }
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }
    let i = k + 1,
      j = nums.length - 1;
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return res;
};

/**
 * 15. 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例：
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 * 题解：
 * https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
 */