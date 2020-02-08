/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
var squareSum = function (n) {
  let str = `${n}`
  let result = 0
  for (let i = 0; i < str.length; i++) {
    result += Math.pow(str[i] * 1, 2)
  }
  return result
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  while (squareSum(n) !== 1) {
    if (n % 10 === 0 && n / 10 < 10 && n / 10 !== 7) {
      return false
    }
    n = squareSum(n)
  }
  return true
}
// @lc code=end

