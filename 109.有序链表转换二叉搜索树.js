/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 方法1：把链表转换成数组，后面解法与108题一样
  const nums = []
  while (head) {
    nums.push(head.val)
    head = head.next
  }
  const recursion = (start, end) => {
    if (start > end) {
      return null
    }
    const mid = (start + end) >>> 1
    const root = new TreeNode(nums[mid])
    root.left = recursion(start, mid - 1)
    root.right = recursion(mid + 1, end)
    return root // 返回当前子树
  }
  return recursion(0, nums.length - 1)
  // 方法2：快慢指针
}
// @lc code=end
