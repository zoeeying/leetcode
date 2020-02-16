/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start

// 判断一个数是否是自除数
var ifDividingNumber = function (n) {
  let result = true
  let str = `${n}`
  for (let i = 0; i < str.length; i++) {
    if (n % (str[i] * 1) !== 0) {
      result = false
    }
  }
  return result
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let result = []
  for (let i = left; i <= right; i++) {
    if (ifDividingNumber(i)) {
      result.push(i)
    }
  }
  return result
}
// @lc code=end

