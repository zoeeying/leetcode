/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
  // 将每层的每两个相邻节点连接起来
  // 方法1：前序遍历
  if (!root) {
    return null
  }
  const connectTwoNode = (node1, node2) => {
    if (node1 === null || node2 === null) {
      return
    }
    // 前序遍历
    node1.next = node2
    connectTwoNode(node1.left, node1.right)
    connectTwoNode(node2.left, node2.right)
    connectTwoNode(node1.right, node2.left)
  }
  connectTwoNode(root.left, root.right)
  return root
  // ***********************************************
  // 方法2：广度优先搜索
  // if (!root) {
  //   return null
  // }
  // const q = [root]
  // while (q.length) {
  //   const levelSize = q.length
  //   for (let i = 0; i < levelSize; i++) {
  //     const node = q.shift()
  //     // 每层最后一个节点不做连接操作
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
}
// @lc code=end
