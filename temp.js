/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const set = new Set();
  let max = 0,
    min = 14;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    if (set.has(nums[i])) {
      return false;
    }
    set.add(nums[i]);
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  return max - min < 5;
};
