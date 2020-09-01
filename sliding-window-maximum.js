/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) {
    return [];
  }
  const deque = [];
  const res = [];
  // 滑动窗口右边界从0到k-1
  for (let i = 0; i < k; i++) {
    // 未形成窗口直到形成首个窗口
    while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop();
    deque.push(nums[i]);
  }
  // 第一个窗口最大值
  res[0] = deque[0];
  // 滑动窗口右边界从k到尾
  for (let i = k; i < nums.length; i++) {
    // 形成窗口后
    if (deque[0] == nums[i - k]) deque.shift();
    while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop();
    deque.push(nums[i]);
    res[i - k + 1] = deque[0];
  }
  return res;
};

/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 * 示例:
 *
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 * 解释:
 *
 *   滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 * 题解：
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
 */
