/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const ans = []
  const recursion = node => {
    if (node === null) {
      return
    }
    for (let child of node.children) {
      recursion(child)
    }
    ans.push(node.val)
  }
  recursion(root)
  return ans
}
// @lc code=end
