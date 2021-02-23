/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  // 方法1：广度优先搜索
  // if (!root) {
  //   return 0
  // }
  // let ans = 1
  // const q = [root]
  // while (q.length) {
  //   const levelSize = q.length // 当前层的节点个数
  //   for (let i = 1; i <= levelSize; i++) {
  //     const node = q.shift()
  //     if (!node.right && !node.left) {
  //       return ans
  //     }
  //     if (node.left) {
  //       q.push(node.left)
  //     }
  //     if (node.right) {
  //       q.push(node.right)
  //     }
  //   }
  //   ans++
  // }
  // ******************************************************
  // 方法2：深度优先搜索
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  let ans = Number.MAX_SAFE_INTEGER
  if (root.left) {
    ans = Math.min(minDepth(root.left), ans)
  }
  if (root.right) {
    ans = Math.min(minDepth(root.right), ans)
  }
  return ans + 1
}
// @lc code=end
