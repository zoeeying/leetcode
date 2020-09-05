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
  const factorial = (num) => {
    if (num <= 1) {
      return 1
    } else {
      return num * factorial(num - 1)
    }
  }
  let result = 0
  for (let i = 0; i < n / 2; i++) {
    result += factorial(n - i) / (factorial(i) * factorial(n - 2 * i))
  }
  if (n % 2 === 0) {
    result += 1
  }
  return result
}
climbStairs(6)
// @lc code=end
