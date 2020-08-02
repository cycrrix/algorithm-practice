/**
 * 首尾双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if ((nums[left] & 1) !== 0) {
      left++;
      continue;
    }
    if ((nums[right] & 1) !== 1) {
      right--;
      continue;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
};

/**
 * 快慢双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let low = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] & 1) {
      [nums[low], nums[fast]] = [nums[fast], nums[low]];
      low++;
    }
    fast++;
  }
  return nums;
};

/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 
 * 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 * 
 * 题解：
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/solution/ti-jie-shou-wei-shuang-zhi-zhen-kuai-man-shuang-zh/
 */