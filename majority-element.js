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
    votes += nums[i] === x ? 1 : -1;
  }
  return x;
};
