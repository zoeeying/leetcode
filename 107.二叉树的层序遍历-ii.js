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
  const ans = []
  if (!root) {
    return ans
  }
  const q = [root] // 用于存放每一层的节点
  while (q.length) {
    const levelSize = q.length
    const temp = [] // 用于存放当前层的值
    for (let i = 1; i <= levelSize; i++) {
      const node = q.shift()
      temp.push(node.val)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    ans.push(temp)
  }
  ans.reverse()
  return ans
}
// @lc code=end
