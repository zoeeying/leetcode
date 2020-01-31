/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s) {
    let result
    for (let i = 0;i < s.length;i++) {
      if (s.split(s[i]).length - 1 === 1) {
        result = i
        break
      }
    }
    if (`${result}` === 'undefined') {
      return -1
    }
    return result
  } else {
    return -1
  }
}
// @lc code=end

