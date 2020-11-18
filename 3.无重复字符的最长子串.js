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
  // let map = new Map()
  // let result = 0
  // for (let i = 0, j = 0; j < s.length; j++) {
  //   if (map.has(s[j])) {
  //     i = Math.max(map.get(s[j]) + 1, i)
  //   }
  //   result = Math.max(result, j - i + 1)
  //   map.set(s[j], j)
  // }
  // return result
  // ---------------------------------------
}
// @lc code=end
