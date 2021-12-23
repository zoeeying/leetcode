/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // labuladong算法小抄解法
  // 将节点的左子树和右子树拉平，然后将右子树接到左子树下方
  // 然后将整个左子树作为节点的右子树
  // 然后递归，搞定
  // 先拉平左右子树才能进行后续操作，所以采用后序遍历
  if (!root) {
    return null
  }
  flatten(root.left)
  flatten(root.right)
  // 后序遍历
  // 先把左右子树保存下来，左右子树已经被拉平了
  const left = root.left
  const right = root.right
  // 将左子树作为节点的右子树
  root.left = null
  root.right = left
  // 将原来的右子树接到现在的右子树末端
  let p = root
  while (p.right) {
    p = p.right
  }
  p.right = right
}
// @lc code=end
