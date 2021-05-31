/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 方法1：自己写的
  // for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  //   if (4 ** i === n) {
  //     return true
  //   }
  //   if (4 ** i > n) {
  //     break
  //   }
  // }
  // return false
  // ************************************************************
  // 方法2：递归
  if (n < 1) {
    return false
  }
  if (n == 1) {
    return true
  }
  if (n % 4 == 0) {
    return isPowerOfFour(n / 4)
  }
  return false
  // ************************************************************
  // 方法3：遍历
  // if (n < 1) {
  //   return false
  // }
  // while (n > 1) {
  //   if (n % 4 == 0) {
  //     n /= 4
  //   } else {
  //     return false
  //   }
  // }
  // return true
  // ************************************************************
  // 方法4：位运算
  // return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1
}

// @lc code=end
