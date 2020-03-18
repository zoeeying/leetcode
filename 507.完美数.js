/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 0) {
    return false
  }
  let result = 0
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      result += i
    }
  }
  return num === result
}
// @lc code=end

