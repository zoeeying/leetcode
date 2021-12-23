/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // 方法1：广度优先搜索
  // 广搜解法与116题一样
  // if (!root) {
  //   return null
  // }
  // const q = [root]
  // while (q.length) {
  //   const levelSize = q.length
  //   for (let i = 0; i < levelSize; i++) {
  //     const node = q.shift()
  //     if (i < levelSize - 1) {
  //       node.next = q[0]
  //     }
  //     if (node.left) {
  //       q.push(node.left)
  //     }
  //     if (node.right) {
  //       q.push(node.right)
  //     }
  //   }
  // }
  // return root
  // *******************************************
  // 方法2：方法1中连接的地方换一种写法
  if (!root) {
    return null
  }
  const q = [root]
  while (q.length) {
    const levelSize = q.length
    let last = null // 上一个节点
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift()
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
      // 如果i等于0， 那么last是上一层的最后一个节点
      if (i !== 0) {
        last.next = node
      }
      last = node // 更新上一个节点
    }
  }
  return root
}
// @lc code=end
