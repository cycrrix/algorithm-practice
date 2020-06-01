/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    /**
     * s和p可能为空。空的长度就是0，但是这些情况都已经判断过了，只需要判断是否为null即可
     * if(p.length()==0&&s.length()==0)
     *      return true;
     */
    let rows = s.length;
    let columns = p.length;
    // 生成二维数组
    let dp = Array(rows + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(columns + 1).fill(false)
    }
    //s和p两个都为空，肯定是可以匹配的，同时这里取true的原因是
    //当s=a，p=a，那么dp[1][1] = dp[0][0]。因此dp[0][0]必须为true。
    dp[0][0] = true;
    for (let j = 1; j <= columns; j++)
    {
        //p[j-1]为*可以把j-2和j-1处的字符删去，只有[0,j-3]都为true才可以
        //因此dp[j-2]也要为true，才可以说明前j个为true
        if (p.charAt(j - 1) === '*' && dp[0][j - 2])
            dp[0][j] = true;
    }

    for (let i = 1; i <= rows; i++)
    {
        for (let j = 1; j <= columns; j++)
        {
            let nows = s.charAt(i - 1);
            let nowp = p.charAt(j - 1);
            if (nows == nowp) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                if (nowp == '.')
                    dp[i][j] = dp[i - 1][j - 1];
                else if (nowp == '*') {
                    //p需要能前移1个。（当前p指向的是j-1，前移1位就是j-2，因此为j>=2）
                    if (j >= 2) {
                        let nowpLast = p.charAt(j - 2);
                        //只有p[j-2]==s[i-1]或p[j-2]==‘.’才可以让*取1个或者多个字符：
                        if (nowpLast == nows || nowpLast == '.')
                            dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                        //不论p[j-2]是否等于s[i-1]都可以删除掉j-1和j-2处字符：
                        dp[i][j] = dp[i][j] || dp[i][j - 2];
                    }
                }
                else
                    dp[i][j] = false;
            }
        }
    }
    return dp[rows][columns];
};

console.log(isMatch('', '.'));

/**
 * 10. 正则表达式匹配
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 题解思路：
 * https://leetcode-cn.com/problems/regular-expression-matching/solution/dong-tai-gui-hua-zui-xiang-xi-jie-da-you-jian-zhi-/
 */