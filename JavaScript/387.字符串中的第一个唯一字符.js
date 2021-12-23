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
  let str = s
  if (!str) {
    return -1
  }
  for (let i = str.length - 1;i >= 0;i--) {
    if (str.split(str[i]).length > 2) {
      // 删除字符串中所有的str[i]
      str = str.split(str[i]).join('')
    }
  }
  if (!str[0]) {
    return -1
  }
  return s.indexOf(str[0])
}
// @lc code=end

