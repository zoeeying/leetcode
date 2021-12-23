/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 广度优先搜索
  // const ret = []
  // if (!root) {
  //   return ret
  // }
  // const q = []
  // q.push(root)
  // while (q.length) {
  //   const currentLevelSize = q.length // 每层的节点数
  //   ret.push([])
  //   for (let i = 1; i <= currentLevelSize; ++i) {
  //     const node = q.shift()
  //     ret[ret.length - 1].push(node.val)
  //     if (node.left) q.push(node.left)
  //     if (node.right) q.push(node.right)
  //   }
  // }
  // return ret

  // 自己默写
  const result = []
  if (!root) {
    return result
  }
  const q = [] // 通过队列来实现广搜
  q.push(root)
  while (q.length) {
    const levelSize = q.length // 每层的节点数
    const sub = []
    for (let i = 1; i <= levelSize; i++) {
      const node = q.shift() // 去掉队列的第一个元素，并存到node中
      // result中最后一个元素是一个数组，把node.val放进去
      sub.push(node.val)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    result.push(sub)
  }
  return result
}
// @lc code=end
