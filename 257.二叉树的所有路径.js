/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 方法1：深搜
  // path是字符串，保存了当前节点的路径，如果是path是数组，需要pop，见方法2
  // let paths = []
  // const helper = (node, path) => {
  //   if (node) {
  //     path += String(node.val)
  //     if (node.left === null && node.right === null) {
  //       paths.push(path)
  //     } else {
  //       path += '->'
  //       helper(node.left, path)
  //       helper(node.right, path)
  //     }
  //   }
  // }
  // helper(root, '')
  // return paths
  // ********************************
  // 方法2：回溯
  let paths = []
  const backtrack = (node, path) => {
    if (!node) {
      return
    }
    path.push(node.val)
    // 这段逻辑很重要
    if (!node.left && !node.right) {
      paths.push(path.join('->'))
      path.pop()
      return
    }
    backtrack(node.left, path)
    backtrack(node.right, path)
    path.pop()
  }
  backtrack(root, [])
  return paths
}
// @lc code=end
