/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const states = [
    { " ": 0, s: 1, d: 2, ".": 4 }, // 0. start with 'blank'
    { d: 2, ".": 4 }, // 1. 'sign' before 'e'
    { d: 2, ".": 3, e: 5, " ": 8 }, // 2. 'digit' before 'dot'
    { d: 3, e: 5, " ": 8 }, // 3. 'digit' after 'dot'
    { d: 3 }, // 4. 'digit' after 'dot' (‘blank’ before 'dot')
    { s: 6, d: 7 }, // 5. 'e'
    { d: 7 }, // 6. 'sign' after 'e'
    { d: 7, " ": 8 }, // 7. 'digit' after 'e'
    { " ": 8 }, // 8. end with 'blank'
  ];
  let p = 0;
  let t;
  for (let c of s) {
    if (c >= "0" && c <= "9") t = "d";
    else if (c == "+" || c == "-") t = "s";
    else if (c == "e" || c == "E") t = "e";
    else if (c == "." || c == " ") t = c;
    else t = "?";
    if (states[p][t] === undefined) return false;
    p = states[p][t];
  }
  return p == 2 || p == 3 || p == 7 || p == 8;
};

/**
 * 剑指 Offer 20. 表示数值的字符串
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 *
 * 题解：
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solution/mian-shi-ti-20-biao-shi-shu-zhi-de-zi-fu-chuan-y-2/
 */
