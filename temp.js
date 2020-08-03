/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (s.length===0) {
    return ' '
  }
  let countMap = {};
  for (let index = 0; index < s.length; index++) {
    let currChar = s[index]
    if (countMap[currChar]) {
      countMap[currChart] += 1;
    } else {
      countMap[currChart] = 1;
    }
  }
  for (let index = 0; index < s.length; index++) {
    
  }
};