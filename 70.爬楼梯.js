/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 1
  for (let i = 1; i < n / 2; i++) {
    result += n - 2 * i + i
  }
  if (n % 2 === 0) {
    result += 1
  }
  console.log(result)
  return result
}
climbStairs(6)
// @lc code=end
