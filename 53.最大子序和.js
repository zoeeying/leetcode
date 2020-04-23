/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 借鉴了别人的想法
var maxSubArray = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    res = Math.max(res, nums[i])
  }
  return res
}

// @lc code=end
