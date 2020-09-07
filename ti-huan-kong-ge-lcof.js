/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = "";
  for (const c of s) {
    if (c === " ") {
      res += "%20";
    } else {
      res += c;
    }
  }
  return res;
};

/**
 * 剑指 Offer 05. 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 *
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 *
 * 题解：
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/mian-shi-ti-05-ti-huan-kong-ge-ji-jian-qing-xi-tu-/
 */

/**
 * 直接用空格将字符串切割成数组，再用20%进行连接。
 * @param {*} s
 */
var replaceSpace = function (s) {
  return s.split(" ").join("%20");
};

/**
 * 用正则表达式找到所有空格依次替换
 * @param {*} s
 */
var replaceSpace = function (s) {
  return str.replace(/\s/g, "%20");
};
