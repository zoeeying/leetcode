/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 方法一：双指针，滑动窗口
  // let result = 0
  // let r = 0
  // let l = 0
  // for (; r < s.length; r++) {
  //   const index = s.slice(l, r).indexOf(s[r])
  //   if (index > -1) {
  //     l = l + index + 1
  //   }
  //   result = Math.max(result, r - l + 1)
  // }
  // return result
  // -------------------------------------
  // 方法二：HashMap
  let hash = {}
  let result = 0
  for (let l = 0, r = 0; r < s.length; r++) {
    if (hash[s[r]] !== undefined) {
      l = Math.max(hash[s[r]] + 1, l) // l不能比之前的l小
    }
    result = Math.max(result, r - l + 1)
    hash[s[r]] = r
  }
  return result
}
lengthOfLongestSubstring('abba')
// @lc code=end
