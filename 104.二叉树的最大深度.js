/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  // 方法1：深度优先搜索
  // 最大深度也就是总共有多少层
  // 后序遍历
  if (!root) {
    return 0
  } else {
    const left = maxDepth(root.left) // 左子树的最大深度
    const right = maxDepth(root.right) // 右子树的最大深度
    return Math.max(left, right) + 1 // 根节点的深度是1
  }

  // *********************************************************
  // 方法2：广度优先搜索
  // 最大深度也就是总共有多少层
  // let ans = 0
  // if (!root) {
  //   return ans
  // }
  // const q = [root]
  // while (q.length) {
  //   const levelSize = q.length // 每层的节点数
  //   for (let i = 1; i <= levelSize; i++) {
  //     const node = q.shift()
  //     if (node.left) {
  //       q.push(node.left)
  //     }
  //     if (node.right) {
  //       q.push(node.right)
  //     }
  //   }
  //   ans++
  // }
  // return ans
}
// @lc code=end
