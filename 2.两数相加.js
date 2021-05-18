/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 把链表中的每个数字拼成一个整数
  const linkToNumber = head => {
    let num = 0
    let count = 0
    while (head !== null) {
      num += head.val * 10 ** count
      count++
      head = head.next
    }
    return num
  }
  let total = String(linkToNumber(l1) + linkToNumber(l2))
  const len = total.length
  const head = new ListNode()
  head.val = total[len - 1]
  head.next = null
  let p = head // 临时变量，在循环中存储上一个节点
  for (let i = len - 2; i >= 0; i--) {
    let node = new ListNode()
    node.val = total[i]
    node.next = null
    p.next = node // 将当前节点与之前节点连接
    p = p.next // 或者p = node
  }
  return head
}

// @lc code=end
