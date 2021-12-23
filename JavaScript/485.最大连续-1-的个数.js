/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // 哈哈哈，乱写
  // let str = ''
  // nums.forEach((item) => {
  //   str += item
  // })
  // return Math.max(...str.split('0').map((item) => item.length))

  // 换一种方法
  let l = 0
  let result = 0
  for (let r = 0; r <= nums.length; r++) {
    if (nums[r] === 0 || nums[r] === undefined) {
      result = Math.max(r - l, result)
      l = r + 1
    }
  }
  return result
}
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
// @lc code=end
