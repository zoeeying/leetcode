/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let str = `${num}`
  for (let i = 0;i < str.length;i++) {
    if (str[i] === '6') {
      str = str.replace('6', '9') // 只替换第一个'6'
      break
    }
  }
  return str * 1
}
// @lc code=end

