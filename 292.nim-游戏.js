/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 只要遇到4的倍数，一定会输
  return n % 4 !== 0
}
// @lc code=end
