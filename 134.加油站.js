/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 方法1：暴力求解，假设从任何一个位置出发，都能绕一圈回到原来的位置
  let len = gas.length
  for (let i = 0; i < len; i++) {
    let curGas = 0
    for (let j = i; j <= i + len; j++) {
      curGas = curGas + gas[j % len] - cost[j % len]
      if (curGas < 0) {
        break
      }
    }
    if (curGas >= 0) {
      return i
    }
  }
  return -1
  // ----------------------------------
  // 方法2：贪心算法
}
// @lc code=end
