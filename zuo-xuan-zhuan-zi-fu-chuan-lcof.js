/**
 * 方法一：字符串切片
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords1 = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};

/**
 * 方法二：列表遍历拼接
 * 若面试规定不允许使用 切片函数 ，则使用此方法
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords2 = function (s, n) {
  const res = [];
  for (let i = n; i < n + s.length; i++) {
    res.push(s[i % s.length]);
  }
  return res.join("");
};

/**
 * 方法三：
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords3 = function (s, n) {
  let res = "";
  for (let i = n; i < n + s.length; i++) {
    res += s[i % s.length];
  }
  return res;
};

// 性能测试
var test = "1".repeat(10000000);
console.time("someFunction1");
reverseLeftWords1(test, 2); // 5ms
console.timeEnd("someFunction1");
console.time("someFunction2");
reverseLeftWords2(test, 2); // 700ms
console.timeEnd("someFunction2");
console.time("someFunction3");
reverseLeftWords3(test, 2); // 800ms
console.timeEnd("someFunction3");

/**
 * 剑指 Offer 58 - II. 左旋转字符串
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 *
 * 示例 1：
 * 输入: s = "abcdefg", k = 2
 * 输出: "cdefgab"
 *
 * 示例 2：
 * 输入: s = "lrloseumgh", k = 6
 * 输出: "umghlrlose"
 *
 * 题解：
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/solution/mian-shi-ti-58-ii-zuo-xuan-zhuan-zi-fu-chuan-qie-p/
 */
