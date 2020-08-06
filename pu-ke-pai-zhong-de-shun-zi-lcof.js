/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let max = 0,
    min = 14;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // 跳过大小王
      continue;
    }
    if (set.has(nums[i])) {
      return false; // 若有重复，提前返回false
    }
    set.add(nums[i]); // 添加此牌至 Set
    max = Math.max(max, nums[i]); // 最大牌
    min = Math.min(min, nums[i]); // 最小牌
  }
  return max - min < 5;
};
