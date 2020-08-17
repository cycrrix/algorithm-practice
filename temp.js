//利用两次二分法分别确定target的左右边界（左右边界为target值序列的左/右一位，因此最终结果是right-left-1）
class Solution {
  public let search(let[] nums, let target) {
      if(nums.length == 0) {
          return 0;
      }
      //初始左右指针位置
      let i = 0;
      let j = nums.length-1;
      //第一次二分：找right边界
      //这边是“小于等于”，因此当循环结束后，ij不重合，且如果存在target值的话，i的位置就是右边界（target值序列右边第一个大于target值的位置
      while(i <= j) {
          let mid = (i+j) >> 1;
          //这里包含“等于”，目的是为了确定右边界，就是说当mid等于target时，因为不确定后面还有没有target，在闭区间[m+1,j]中找右边界right 
          if(nums[mid] <= target){
              i = mid+1;
          }
          else{
              j = mid-1;
          }
      }
      //查找完右边界 right=i 后，则 nums[j] 指向最右边的 target （若存在）
      //在更新right边界值之前，需要判断这个数组中是否存在target，如果不存在（看j指向的位置是不是target）
      if(j>=0&&nums[j] != target){
          return 0;
      }
      let right = i;    //更新right边界
      //重置指针
      i = 0;
      j = nums.length-1;
      //第二次二分：找left边界
      //结束之后，j指向target序列左边第一个小于它的位置，i指向target（经过上面判断，target一定存在）
      while(i <= j) {
          let mid = (i+j) >> 1;
          //这里是包含"等于”，目的是为了确定左边界，就是说当mid等于target时，因为不确定左边还有没有target，在闭区间[i,m-1]中找左边界left 
          if(nums[mid] >= target){
              j = mid-1;
          }
          else{
              i= mid+1;
          }
      }
      //更新左指针
      let left = j;
      return right-left-1;
  }
}