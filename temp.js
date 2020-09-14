/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0,
    b = 1,
    sum;
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
};
