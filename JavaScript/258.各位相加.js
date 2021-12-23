/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 自己的解法，把数字转换成字符串，然后递归
  const loop = (str) => {
    const num = [...str].reduce((cur, item) => cur + item * 1, 0)
    return num + ''
  }
  let result = num + ''
  while (result.length > 1) {
    result = loop(result)
  }
  return result * 1
  // -------------------------
  // 别人的解法1
  // 取9的余数，如果余数是0，就返回9
  // if (num < 10) {
  //   return num
  // }
  // return num % 9 || 9
}
addDigits(38)
// @lc code=end
