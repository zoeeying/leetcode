/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0,
    r = 0
  const hash = {}
  let result = 0
  let maxChar = 0 // 重复最多的字符的长度
  for (; r < s.length; r++) {
    hash[s[r]] = (hash[s[r]] || 0) + 1
    maxChar = Math.max(maxChar, hash[s[r]])
    if (r - l + 1 - maxChar >= k) {
      const start = s[l++]
      hash[start] -= 1
    }
    result = Math.max(result, r - l + 1)
  }
  console.log(result)
  return result
}
characterReplacement('AAAA', 0)
// @lc code=end
