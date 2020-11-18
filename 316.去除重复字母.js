/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let result = ''
  let arr = s.split('')
  arr = [...new Set(arr)]
  arr.forEach((item) => (result += item))
  return result
}
// @lc code=end
