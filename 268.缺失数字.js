/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arr = nums.map(item => item)
  if (arr.length === 1) {
    if (arr[0] === 0) {
      return 1
    } else {
      return arr[0] - 1
    }
  }
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i
    }
  }
  return arr.length
}
// @lc code=end

