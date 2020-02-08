/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 1
  while ((result * result) <= x) {
    result += 1
  }
  return result - 1
}
// @lc code=end

