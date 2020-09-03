/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const states = [
    { " ": 0, s: 1, d: 2, ".": 4 },
    { d: 2, ".": 4 },
    { d: 2, ".": 3, e: 5, " ": 8 },
    { d: 3, e: 5, " ": 8 },
    { d: 3 },
    { s: 6 },
  ];
};
