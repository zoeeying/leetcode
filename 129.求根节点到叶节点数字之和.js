/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  // 考虑使用回溯
  let ans = 0
  // numStr代表根节点到叶子节点的路径字符串
  const backtrack = (numStr, node) => {
    if (!node) {
      return
    }
    numStr += String(node.val)
    if (node.left === null && node.right === null) {
      ans += Number(numStr)
    } else {
      backtrack(numStr, node.left)
      backtrack(numStr, node.right)
    }
  }
  backtrack('', root)
  return ans
}
// @lc code=end
