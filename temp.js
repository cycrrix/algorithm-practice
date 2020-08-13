/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length < 2) {
    return 0;
  }
  const copy = [...nums];
  const temp = [];
  return mergeSort(copy, 0, nums.length - 1, temp);
};

function mergeSort(nums, left, right, temp) {
  if (left === right) {
    return 0;
  }
  const mid = parseInt(left + (right - left) / 2);
  const leftPairs = mergeSort(nums, left, mid, temp);
  const rightPairs = mergeSort(nums, mid + 1, right, temp);
  if (nums[mid] <= nums[mid + 1]) {
    return leftPairs + rightPairs;
  }
  const crossPairs = mergeAndCount(nums, left, mid, right, temp);
  return leftPairs + crossPairs + rightPairs;
}
function mergeAndCount(nums, left, mid, right, temp) {
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i];
  }
  let i = left;
  let j = mid + 1;
  let count = 0;
  for (let k = left; k <= right; k++) {
    if (i === mid + 1) {
      nums[k] = temp[j];
      j++;
    } else if (j === right + 1) {
      nums[k] = temp[i];
      i++;
    } else if (nums[i] <= nums[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
      count += mid - i + 1;
    }
  }
  return count;
}
