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
  // 方法一：乱做
  // const factorial = (num) => {
  //   if (num <= 1) {
  //     return 1
  //   } else {
  //     return num * factorial(num - 1)
  //   }
  // }
  // let result = 0
  // for (let i = 0; i < n / 2; i++) {
  //   result += factorial(n - i) / (factorial(i) * factorial(n - 2 * i))
  // }
  // if (n % 2 === 0) {
  //   result += 1
  // }
  // return result
  // --------------------------------------
  // 方法二：动态规划
  const db = []
  db[1] = 1
  db[2] = 2
  for (let i = 3; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2]
  }
  return db[n]
}
// @lc code=end
