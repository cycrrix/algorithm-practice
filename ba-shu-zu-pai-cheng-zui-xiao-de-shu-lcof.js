/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  if (!nums || nums.length ===0) {
    return ""
  }
  return nums.sort(compareFunction).join('');
};

function compareFunction(a,b) {
  const front = ''+a+b;
  const behind = ''+b+a;
  return front-behind;
}

/**
 * 剑指 Offer 45. 把数组排成最小的数
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 示例 1:
 * 输入: [10,2]
 * 输出: "102"
 * 
 * 示例 2:
 * 输入: [3,30,34,5,9]
 * 输出: "3033459"
 * 
 * 题解思路
 * https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/
 * 代码：
 * http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%8A%8A%E6%95%B0%E7%BB%84%E6%8E%92%E6%88%90%E6%9C%80%E5%B0%8F%E7%9A%84%E6%95%B0.html#%E9%A2%98%E7%9B%AE
 */