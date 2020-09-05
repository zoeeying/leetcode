/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = ''
  let pattern = /^[a-zA-Z0-9]$/
  for (let i = 0; i < s.length; i++) {
    if (pattern.test(s[i])) {
      str += s[i]
    }
  }
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
// @lc code=end
