/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = [];
  const str = s.split("");
  dfs(0);
  return res;

  function dfs(x) {
    // 当 x = len(c) - 1x，代表所有位已固定（最后一位只有 1s种情况），则将当前字符串s并加入 res，并返回；
    if (x === str.length - 1) {
      res.push(str.join(""));
      return;
    }
    const set = new Set();
    for (let i = x; i < str.length; i++) {
      if (set.has(str[i])) {
        continue;
      }
      set.add(str[i]);
      //固定字符： 将字符 c[i] 和 c[x] 交换，即固定 c[i] 为当前位字符；
      swap(str, i, x);
      dfs(x + 1);
      swap(str, i, x);
    }
    return res;
  }
  function swap(str, i, j) {
    [str[i], str[j]] = [str[j], str[i]];
  }
};

/**
 * 剑指 Offer 38. 字符串的排列
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 示例:
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * 题解：
 * https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/solution/mian-shi-ti-38-zi-fu-chuan-de-pai-lie-hui-su-fa-by/
 */
