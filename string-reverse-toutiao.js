/**
 * 头条笔试题
 * 实现一个字符串反转：输入：www.toutiao.com.cn 输出：cn.com.toutiao.www，要求：1.不使用字符串处理函数 2.空间复杂度尽可能小
 * 
/**
 * 使用字符串处理函数
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function(s) {
  return s.split('.').reverse().join('.');
};
console.log(reverseWords1('www.toutiao.com.cn'))

/**
 * 不使用字符串处理函数 2.空间复杂度尽可能小
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function(s) {
  var result = '', tempString = '';
  var j=0;
  while (j<s.length) {
    if (s[j] !== '.') {
      tempString += s[j];
    } else {
    result = s[j] + tempString + result;
    tempString = '';
    }
    j++
  }
  result = tempString + result;
  
  return result;
};
console.log(reverseWords2('www.toutiao.com.cn'))

/**
 * 另一个示例适用于字符串数组，输入['w','w',...],1.不使用字符串处理函数 2.空间复杂度尽可能小
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/solution/ 题目下的官方解法第一条评论
 */
/**
 * @param {List<string>} s
 * @return {string}
 */
var reverseWords3 = function (s) {
  reverse(s, 0, s.length - 1);
  var i = 0, j = 0;
  while (j < s.length) {
    while (j < s.length && s[j] != ' ') {
      j++;
    }
    reverse(s, i, j - 1);
    //此时s[j]为空格，下一个不为空格
    i = j + 1;
    j++;
  }
  return s;
};

function reverse(words, start, end) {
  while (start < end) {
    var temp = words[start];
    words[start] = words[end];
    words[end] = temp;
    start++;
    end--;
  }
}

console.log(reverseWords('www.toutiao.com.cn'))

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr=s.split("").reverse().join("")
  return arr.split(" ").reverse().join(" ")
};
