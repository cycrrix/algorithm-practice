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
