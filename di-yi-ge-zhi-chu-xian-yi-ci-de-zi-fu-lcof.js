/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) {
    return " ";
  }
  const countMap = {};
  for (let index = 0; index < s.length; index++) {
    let curr = s[index];
    if (countMap[curr]) {
      countMap[curr] += 1;
    } else {
      countMap[curr] = 1;
    }
  }
  for (let index = 0; index < s.length; index++) {
    if (countMap[s[index]] === 1) {
      return s[index];
    }
  }
  return " ";
};

/**
 * 字符流中第一个不重复的字符
 * 剑指 Offer 50. 第一个只出现一次的字符
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 
 * 示例:
 * s = "abaccdeff"
 * 返回 "b"
 * 
 * s = "" 
 * 返回 " "
 * 
 * 题解：
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/solution/mian-shi-ti-50-di-yi-ge-zhi-chu-xian-yi-ci-de-zi-3/
 * 代码：
 * http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E5%AD%97%E7%AC%A6.html
 */