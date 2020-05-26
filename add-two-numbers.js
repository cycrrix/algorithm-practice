/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var dummyHead = { val: 0, next: null };
    var p = l1, q = l2, curr = dummyHead;
    var carry = 0;
    while (p !== null || q !== null) {
        var x = p !== null ? p.val : 0;
        var y = q !== null ? q.val : 0;
        var sum = x + y + carry;
        var carry = Math.floor(sum/10);
        curr.next = {val:sum%10,next:null};
        curr = curr.next;
        if (p !==null) p=p.next;
        if (q!==null) q=q.next;
    }
    if (carry>0) {
        curr.next = {val:carry,next:null};
    }
    return dummyHead.next;
};

var result = addTwoNumbers({val:2,next:{val:4,next:{val:3,next:null}}},{val:5,next:{val:6,next:{val:4,next:null}}});
console.log(result);

// https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode/