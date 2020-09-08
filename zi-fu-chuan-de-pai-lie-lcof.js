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

console.log(permutation("abc"));
