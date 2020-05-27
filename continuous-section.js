
function summaryRanges(arr){
    var result = [];
    var leftIndex = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index+1]-arr[index] > 1) {
            var item = index-leftIndex > 0?`${arr[leftIndex]}->${arr[index]}`:`${arr[leftIndex]}`;
            result.push(item);
            leftIndex = index + 1;
        }
    }
    return result;
}

console.log(summaryRanges([0,1,2,4,5,7,13,15,16]));

/*
给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"]
思路:滑动窗口
https://blog.csdn.net/LuckyWinty/article/details/106110722
https://mp.weixin.qq.com/s/_1KLVF8-eXVRh9FmEZQAvQ
 */