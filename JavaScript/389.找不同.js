/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let result = t
  for (const i of s) {
    if (result.includes(i)) {
      const start = result.indexOf(i)
      result = result.substring(0, start) + result.substring(start + 1, result.length)
    }
  }
  return result
}
// @lc code=end

