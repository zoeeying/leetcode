/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // let total = 1
  // let result = 0
  // for (let i = 1; i <= n; i++) {
  //   total *= i
  //   if (total % 10 === 0) {
  //     result += 1
  //     total = total / 10
  //   }
  // }
  // return result

  // 别人的题解1
  // var count = 0
  // while (n >= 5) {
  //   count += (n / 5) | 0 // n除以5后去掉小数点
  //   n /= 5
  // }
  // return count

  // 别人的题解2
  // if (n < 5) {
  //   return 0
  // } else {
  //   let k = Math.floor(n / 5)
  //   return k + trailingZeroes(k)
  // }

  // 别人的题解3
  let res = 0
  while (n >= 5) {
    let k = Math.floor(n / 5)
    res += k
    n = k
  }
  return res
}
// @lc code=end
