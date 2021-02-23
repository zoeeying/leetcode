/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 前序遍历、后序遍历都可以实现，但是中序遍历不可以
  // 中序遍历的遍历顺序是左根右，相当于左侧节点交换了两次，右侧节点没换
  // 因为遍历根的时候交换了左右节点，遍历右侧节点的时候还是之前那个左节点
  if (root === null) {
    return null // 如果root是null的话，必须返回null，不能返回undefined
  }
  let temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}
// @lc code=end
