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
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
console.log(addBinary("11", "1"))
// @lc code=end

