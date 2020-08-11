/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let votes = 0,
    x;
  for (let i = 0; i < nums.length; i++) {
    if (votes === 0) {
      x = nums[i];
    }
    votes += nums[i] === x ? +1 : -1;
  }
  return x;
};

/**
 * 剑指 Offer 39. 数组中出现次数超过一半的数字
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1:
 * 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 * 输出: 2
 * 题解：
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/solution/mian-shi-ti-39-shu-zu-zhong-chu-xian-ci-shu-chao-3/
 */