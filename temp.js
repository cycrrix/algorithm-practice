/**
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
