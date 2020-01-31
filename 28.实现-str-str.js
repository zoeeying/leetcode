/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack && needle) {
    return -1
  }
  if (!needle) {
    return 0
  }
  let arr = haystack.split(needle)
  let num = arr.length - 1
  if (num > 0) {
    return arr[0].length
  }
  return -1
}
// @lc code=end

