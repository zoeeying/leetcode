/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  // 后序遍历
  let ans = Number.MIN_SAFE_INTEGER
  const dfs = node => {
    if (node === null) {
      return 0
    }
    let left = Math.max(0, dfs(node.left)) // 左子树提供的最大路径和
    let right = Math.max(0, dfs(node.right)) // 右子树提供的最大路径和
    ans = Math.max(ans, left + right + node.val)
    return Math.max(left, right) + node.val
  }
  dfs(root)
  return ans
}
// @lc code=end
