/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = `${x}`
  let middle = (str.length / 2) ^ 0
  for (let i = 0;i < middle;i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
// @lc code=end

