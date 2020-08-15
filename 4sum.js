/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  /*定义一个返回值*/
  const result = [];
  /*当数组元素小于4个时，直接返回*/
  if (nums.length < 4) {
    return result;
  }
  /*对数组进行从小到大排序*/
  nums.sort((a, b) => a - b);
  /*数组长度*/
  const length = nums.length;
  /*定义4个指针k，i，j，h  k从0开始遍历，i从k+1开始遍历，留下j和h，j指向i+1，h指向数组最大值*/
  for (let k = 0; k < length - 3; k++) {
    /*当k的值与前面的值相等时忽略*/
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }
    /*获取当前最小值，如果最小值比目标值大，说明后面越来越大的值根本没戏*/
    let min1 = nums[k] + nums[k + 1] + nums[k + 2] + nums[k + 3];
    if (min1 > target) {
      break;
    }
    /*获取当前最大值，如果最大值比目标值小，说明后面越来越小的值根本没戏，忽略*/
    let max1 = nums[k] + nums[length - 1] + nums[length - 2] + nums[length - 3];
    if (max1 < target) {
      continue;
    }
    /*第二层循环i，初始值指向k+1*/
    for (let i = k + 1; i < length - 2; i++) {
      /*当i的值与前面的值相等时忽略*/
      if (i > k + 1 && nums[i] === nums[i - 1]) {
        continue;
      }
      /*定义指针j指向i+1*/
      let j = i + 1;
      /*定义指针h指向数组末尾*/
      let h = length - 1;
      /*获取当前最小值，如果最小值比目标值大，说明后面越来越大的值根本没戏，忽略*/
      let min = nums[k] + nums[i] + nums[j] + nums[j + 1];
      if (min > target) {
        continue;
      }
      /*获取当前最大值，如果最大值比目标值小，说明后面越来越小的值根本没戏，忽略*/
      let max = nums[k] + nums[i] + nums[h] + nums[h - 1];
      if (max < target) {
        continue;
      }
      /*开始j指针和h指针的表演，计算当前和，如果等于目标值，j++并去重，h--并去重，当当前和大于目标值时h--，当当前和小于目标值时j++*/
      while (j < h) {
        let curr = nums[k] + nums[i] + nums[j] + nums[h];
        if (curr === target) {
          result.push([nums[k], nums[i], nums[j], nums[h]]);
          j++;
          while (j < h && nums[j] === nums[j - 1]) {
            j++;
          }
          h--;
          while (j < h && i < h && nums[h] === nums[h + 1]) {
            h--;
          }
        } else if (curr > target) {
          h--;
        } else {
          j++;
        }
      }
    }
  }
  return result;
};
console.log(fourSum([1,0,-1,0,-2,2],0))