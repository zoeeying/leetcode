/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 需要注意的是，并不是左节点的值小于当前节点的值，右节点的值大于当前节点的值就可以了
  // 还需要保证左节点以及所有子节点的值都小于当前节点的值，右节点同理
  const helper = (node, lower, upper) => {
    if (node === null) {
      return true
    }
    if (node.val <= lower || node.val >= upper) {
      return false
    }
    return (
      helper(node.left, lower, node.val) && helper(node.right, node.val, upper)
    )
  }
  return helper(root, -Infinity, Infinity)
}
// @lc code=end
