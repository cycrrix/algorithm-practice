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

/**
 * 剑指 Offer 61. 扑克牌中的顺子
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 *
 * 示例 1:
 * 输入: [1,2,3,4,5]
 * 输出: True
 *
 * 示例 2:
 * 输入: [0,0,1,2,5]
 * 输出: True
 *
 * 题解：
 * https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/solution/mian-shi-ti-61-bu-ke-pai-zhong-de-shun-zi-ji-he-se/
 */
