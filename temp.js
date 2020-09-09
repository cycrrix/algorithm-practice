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
      swap(str, i, x);
      dfs(x + 1);
      swap(str, i, x);
    }
  }

  function swap(str, i, j) {
    [str[i], str[j]] = [str[j], str[i]];
  }
};
