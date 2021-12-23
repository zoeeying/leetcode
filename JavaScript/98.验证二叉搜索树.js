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
  // 二叉搜索树BST：一个二叉树中，任意节点的值要大于等于左子树所有节点的值，且要小于等于右子树的所有节点值
  // 使用辅助函数，增加函数参数列表，在参数中携带额外信息
  const recursion = (node, min, max) => {
    if (node === null) {
      return true
    }
    if (node.val <= min || node.val >= max) {
      return false
    }
    return recursion(node.left, min, node.val) && recursion(node.right, node.val, max)
  }
  return recursion(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
// @lc code=end
