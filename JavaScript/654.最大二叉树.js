/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const recursion = (nums, lo, hi) => {
  // labuladong思路：
  // 找到nums中最大的元素及其索引，把最大的元素作为根节点
  // 把索引左边的元素构造成左子树，索引右边的元素构造成右子树
  // 然后递归调用
  if (lo > hi) {
    return null
  }
  // 找到最大的元素及其索引
  let maxVal = Number.MIN_SAFE_INTEGER
  let maxIndex = -1
  for (let i = lo; i <= hi; i++) {
    if (nums[i] > maxVal) {
      maxVal = nums[i]
      maxIndex = i
    }
  }
  const root = new TreeNode()
  root.val = maxVal
  root.left = recursion(nums, lo, maxIndex - 1)
  root.right = recursion(nums, maxIndex + 1, hi)
  return root
}
var constructMaximumBinaryTree = function (nums) {
  return recursion(nums, 0, nums.length - 1)
}
// @lc code=end
