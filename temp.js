/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) {
    return " ";
  }
  const countMap = {};
  for (let index = 0; index < s.length; index++) {
    const curr = s[index];
    if (countMap[curr]) {
      countMap[curr] += 1
    } else {
      countMap[curr] = 1
    }
  }
  for (let index = 0; index < s.length; index++) {    
    if (countMap[s[index]] ===1) {
      return s[index]
    }
  }
  return ' '
};
