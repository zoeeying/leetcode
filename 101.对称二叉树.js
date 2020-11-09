/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // 方法一：递归
  // const isMirror = (node1, node2) => {
  //   if (node1 === null && node2 === null) {
  //     return true
  //   }
  //   if (node1 === null || node2 === null) {
  //     return false
  //   }
  //   return (
  //     node1.val === node2.val &&
  //     isMirror(node1.left, node2.right) &&
  //     isMirror(node1.right, node2.left)
  //   )
  // }
  // return isMirror(root, root)
  // ---------------------------------------------------
  // 方法二：迭代
  const isMirror = (node1, node2) => {
    const q = []
    q.push(node1)
    q.push(node2)
    while (q.length) {
      node1 = q.shift()
      node2 = q.shift()
      if (!node1 && !node2) {
        continue
      }
      if (!node1 || !node2 || node1.val !== node2.val) {
        return false
      }
      q.push(node1.left)
      q.push(node2.right)
      q.push(node1.right)
      q.push(node2.left)
    }
    return true
  }
  isMirror(root, root)
}
// @lc code=end
