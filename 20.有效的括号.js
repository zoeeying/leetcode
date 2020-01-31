/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const pairObj = {
  '(': ')',
  '{': '}',
  '[': ']',
  ')': '(',
  '}': '{',
  ']': '[',
}
var deleteStr = function (str) {
  for (let i = str.length - 1;i >= 0;i--) {
    if (pairObj[str[i]] === str[i - 1]) {
      str = str.substring(0, i - 1) + str.substring(i + 1, str.length)
    }
  }
  return str
}
var isValid = function (str) {
  return !deleteStr(str)
}
// @lc code=end

