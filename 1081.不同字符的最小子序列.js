/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!stack.includes(char)) {
      while (
        stack.length &&
        stack[stack.length - 1] > char &&
        s.indexOf(stack[stack.length - 1], i) > i
      ) {
        stack.pop()
      }
      stack.push(char)
    }
  }
  return stack.join('')
}
smallestSubsequence('bcabc')
// @lc code=end
