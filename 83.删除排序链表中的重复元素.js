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
  // 方法1：这题不会写，看别人的解法的
  // let cur = head
  // while (cur && cur.next) {
  //   if (cur.val === cur.next.val) {
  //     cur.next = cur.next.next
  //   } else {
  //     cur = cur.next
  //   }
  // }
  // return head
  // *******************************************
  // 方法2：参考第26题，使用快慢指针
  if (head === null) {
    return null
  }
  const slow = head,
    fast = head.next
  while (fast !== null) {
    if (slow.val !== fast.val) {
      slow.next = fast // nums[slow] = nums[fast]
      slow = slow.next // slow++
    }
    fast = fast.next // fast++
  }
  slow.next = null // 断开与后面重复元素的连接
  return head
}
// @lc code=end
