/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
var isPrime = function (n) {
  let count = 0
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (count >= 2) {
      return false
    }
    if (n % i === 0) {
      count += 1
    }
  }
  if (count === 1 && n !== 1) {
    // 是质数
    return true
  }
  return false
}
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      count += 1
    }
  }
  return count
}
// @lc code=end

