/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  if (a.length === 0) {
    return [];
  }
  let b = [];
  b[0] = 1;
  for (let i = 1; i < a.length; i++) {
    b[i] = b[i - 1] * a[i - 1];
  }
  let temp = 1;
  for (let i = a.length - 2; i >= 0; i--) {
    temp *= a[i + 1];
    b[i] *= temp;
  }
  return b;
};

/**
 * 剑指 Offer 66. 构建乘积数组
 * 题解：
 * https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/solution/mian-shi-ti-66-gou-jian-cheng-ji-shu-zu-biao-ge-fe/
 */
