/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(' ').filter(item => item)
  if (arr.length) {
    return arr[arr.length - 1].length
  }
  return 0
}
// @lc code=end

