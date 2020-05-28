/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  reverse(s, 0, s.length - 1);
  var i=0,j=0;
  while(j < s.length()) {
    while(j < s.length() && cs[j] != ' ') {
        j++;
    }
    reverse(cs,i, j - 1);
    //此时cs[j]为空格，下一个不为空格
    i = j + 1;
    j++;
}
  function reverse(words, start, end) {
    while (start < end) {
      var temp = words[start];
      words[start] = words[end];
      words[end] = temp;
      start++;
      end--;
    }
  }
};

/**
 * 头条笔试题
 * 实现一个字符串反转：输入：www.toutiao.com.cn 输出：cn.com.toutiao.www，要求：1.不使用字符串处理函数 2.空间复杂度尽可能小
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/solution/ 题目下的官方解法第一条评论
 */
