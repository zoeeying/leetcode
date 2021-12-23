/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = []
  const recursion = node => {
    if (node === null) {
      return
    }
    ans.push(node.val)
    for (let child of node.children) {
      recursion(child)
    }
  }
  recursion(root)
  return ans
}
// @lc code=end
