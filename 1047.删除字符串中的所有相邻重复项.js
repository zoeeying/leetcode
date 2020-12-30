/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  // 官方题解
  let arr = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === arr[arr.length - 1]) {
      arr.pop()
    } else {
      arr.push(S[i])
    }
  }
  return arr.join('')
}
// @lc code=end
