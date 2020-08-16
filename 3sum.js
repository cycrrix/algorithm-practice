/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }
    /*获取当前三数之和最小值，如果最小值比目标值大，说明后面越来越大的值根本没戏*/
    const min = nums[k] + nums[k + 1] + nums[k + 2];
    if (min > 0) {
      break;
    }
    /*获取当前最大值，如果最大值比目标值小，说明后面越来越小的值根本没戏，忽略*/
    const max = nums[k] + nums[nums.length - 1] + nums[nums.length - 2];
    if (max < 0) {
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
