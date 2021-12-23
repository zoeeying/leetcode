/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1
  while (n - i >= 0) {
    n = n - i
    i++
  }
  return i - 1
}
// @lc code=end

