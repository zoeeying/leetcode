/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start

/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
  const pairObj = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': '(',
    '}': '{',
    ']': '[',
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (pairObj[str[i]] === str[i - 1]) {
      str = str.slice(0, i - 1) + str.slice(i + 1, str.length)
    }
  }
  return !str
}
// @lc code=end
