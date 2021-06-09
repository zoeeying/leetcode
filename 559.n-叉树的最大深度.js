/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.children || !root.children.length) {
    return 1
  }
  let depth = 0
  for (let i = 0; i < root.children.length; i++) {
    depth = Math.max(depth, maxDepth(root.children[i]) + 1)
  }
  return depth
}
// @lc code=end
