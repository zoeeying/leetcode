/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let result = new ListNode()
  while (head) {
    if (head.val === head.next.val) {
      head = head.next
    }
    result.val = head.val
  }
  console.log(result)
  return result
}
// @lc code=end
