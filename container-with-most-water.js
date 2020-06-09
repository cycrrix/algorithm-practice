/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var l = 0,
    r = height.length - 1;
  var ans = 0;
  while (l < r) {
    var area = Math.min(height[l], height[r]) * (r - l);
    ans = Math.max(ans, area);
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return ans
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

/**
 * 11. 盛最多水的容器
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 示例:
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * https://leetcode-cn.com/problems/container-with-most-water/
 */