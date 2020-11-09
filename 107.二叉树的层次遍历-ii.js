/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = []
  if (!root) {
    return result
  }
  const q = []
  q.push(root)
  while (q.length) {
    const levelSize = q.length
    const sub = []
    for (let i = 1; i <= levelSize; i++) {
      const node = q.shift()
      sub.push(node.val)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    result.unshift(sub)
  }
  return result
}
// @lc code=end
