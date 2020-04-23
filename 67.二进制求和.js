/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // const aLen = a.length
  // const bLen = b.length
  // 补齐
  // if (aLen >= bLen) {
  //   b = b.padStart(aLen, '0'.repeat(aLen - bLen))
  // }
  // if (aLen < bLen) {
  //   a = a.padStart(bLen, '0'.repeat(bLen - aLen))
  // }
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
console.log(addBinary('1121', '12'))
// @lc code=end
