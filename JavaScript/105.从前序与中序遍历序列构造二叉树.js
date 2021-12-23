/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length) {
    return null
  }
  const val = preorder.shift() // 把preorder中的第一个元素去掉，并存储下来
  const index = inorder.indexOf(val)
  const node = new TreeNode(val)

  node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
  node.right = buildTree(preorder.slice(index), inorder.slice(index + 1))
  return node
}
// @lc code=end
