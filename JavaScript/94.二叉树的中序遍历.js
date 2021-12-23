/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 方法1：模板写法
  // const ans = []
  // const helper = (val) => {
  //   ans.push(val)
  // }
  // const recursion = (node, callback) => {
  //   if (node !== null) {
  //     recursion(node.left, callback)
  //     callback(node.val)
  //     recursion(node.right, callback)
  //   }
  // }
  // recursion(root, helper)
  // return ans
  // -------------------------------------------
  // 方法2：简化写法
  const ans = []
  const recursion = (node) => {
    if (!node) {
      return
    }
    recursion(node.left)
    ans.push(node.val)
    recursion(node.right)
  }
  recursion(root)
  return ans
}
// @lc code=end
