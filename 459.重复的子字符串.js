/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
// 大概可以考虑用正则吧？
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let str = ''
  for (let i = 0;i < s.length;i++) {
    str += s[i]
    let arr = s.split(str)
    if (arr.every(item => !item)) {
      if (arr.length > 2) {
        return true
      }
    }
  }
  return false
}
// @lc code=end

