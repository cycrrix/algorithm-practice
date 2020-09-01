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
  for (let i = 0; i < k; i++) {
    while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop();
    deque.push(nums[i]);
  }
  res[0] = deque[0];
  for (let i = k; i < nums.length; i++) {
    if (deque[0] === nums[i - k]) deque.shift();
    while (deque.length && deque[deque.length - 1] < nums[i]) deque.pop();
    deque.push(nums[i]);
    res[i - k + 1] = deque[0];
  }
  return res;
};
