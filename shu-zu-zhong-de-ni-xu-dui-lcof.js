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

/**
 * 归并排序：分解、解决、合并
 * @param {*} nums
 * @param {*} left
 * @param {*} right
 * @param {*} temp
 * return 逆序对个数
 */
function mergeSort(nums, left, right, temp) {
  if (left === right) {
    return 0;
  }
  // 分解
  const mid = parseInt(left + (right - left) / 2); //此处采用此方式是因为(right + left) / 2中的right + left可能产生越界
  // 解决
  const leftPairs = mergeSort(nums, left, mid, temp);
  const rightPairs = mergeSort(nums, mid + 1, right, temp);
  if (nums[mid] <= nums[mid + 1]) {
    return leftPairs + rightPairs;// 此时，左边子数组的最大数小于右边子数组的最小数，直接合并即可，不会产生逆序对
  }
  // 合并
  let crossPairs = mergeAndCount(nums, left, mid, right, temp);//crossPairs是将两个有序子数组归并为一个有序数组产生的逆序对
  return leftPairs + rightPairs + crossPairs;
}

function mergeAndCount(nums, left, mid, right, temp) {
  //全程采用一个数组temp的原因有二：不必一直创建新的数组然后销毁，节约资源；每次处理的都是子数组，如果创建新的数组会导致索引的处理很麻烦，容易出错
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i];
  }
  let i = left;//左边的有序数组的左边界
  let j = mid + 1;//右边的有序数组的左边界
  let count = 0;
  for (let k = left; k <= right; k++) {
    if (i === mid + 1) {
      nums[k] = temp[j]; //此时左边的子数组长度为0
      j++;
    } else if (j === right + 1) {
      nums[k] = temp[i]; //此时右边的子数组长度为0
      i++;
    } else if (temp[i] <= temp[j]) {
      //这儿必须得是“<=”，如是“<”，则归并排序是不稳定的
      nums[k] = temp[i]; //左边子数组的值较小，进入有序数组
      i++;
    } else {
      nums[k] = temp[j]; //此时，右边子数组的值较小，进入有序数组
      j++;
      count += mid - i + 1; //左边子数组剩余的个数即为逆序对个数
    }
  }
  return count;
}
reversePairs([7,5,6,4]);