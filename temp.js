const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (arr.length === 0 || k === 0) {
    return [];
  }
  quickSearch(arr, 0, arr.length - 1, k - 1);
  return arr.splice(0, k);
};

function quickSearch(arr, lo, hi, k) {
  let j = partition(arr, lo, hi);
  if (j === k) {
    return;
  }
  if (j > k) {
    quickSearch(arr, lo, j - 1, k);
  } else {
    quickSearch(arr, j + 1, hi, k);
  }
}

function partition(arr, lo, hi) {
  let v = arr[lo];
  let left = lo,
    right = hi + 1;
  while (true) {
    while (++left <= hi && arr[left] < v);
    while (--right >= lo && arr[right] > v);
    if (left >= right) {
      break;
    }
    swap(arr, left, right);
  }
  swap(arr, lo, right);
  return right;
}
console.log(getLeastNumbers([1], 1));
