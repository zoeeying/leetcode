/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const hash = {}
  const arr = str.split(' ')
  if (arr.length !== pattern.length) {
    return false
  }
  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] && hash[pattern[i]] !== arr[i]) {
      return false
    }
    hash[pattern[i]] = arr[i]
  }
  return true
}
console.log(wordPattern('abba', 'dog dog dog dog'))
// @lc code=end
