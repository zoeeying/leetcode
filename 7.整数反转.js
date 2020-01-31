/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = ''
  let temp = `${Math.abs(x)}`.split('').reverse().join('') * 1
  result = x < 0 ? -temp : temp
  if (result <= -(2 ** 31) || result >= (2 ** 31)) {
    result = 0
  }
  return result
}
// @lc code=end

