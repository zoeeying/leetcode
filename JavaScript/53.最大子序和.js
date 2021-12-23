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
var maxSubArray = function (nums) {
  // 借鉴了别人的想法
  // let res = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i - 1] > 0) {
  //     nums[i] += nums[i - 1]
  //   }
  //   res = Math.max(res, nums[i])
  // }
  // return res
  // ----------------------------------------------
  // 试试双指针
  let result = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = i; j < nums.length; j++) {
      count += nums[j]
      result = Math.max(count, result)
    }
  }
  return result
  // --------------------------------------------------
  // 贪心算法
  // let result = Number.MIN_SAFE_INTEGER
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   count += nums[i]
  //   result = Math.max(result, count)
  //   if (count <= 0) {
  //     count = 0
  //   }
  // }
  // return result
  // ---------------------------------------
  // 动态规划
  // let len = nums.length
  // let dp = nums[0]
  // let result = dp
  // for (let i = 1; i < len; i++) {
  //   dp = Math.max(dp + nums[i], nums[i])
  //   result = Math.max(result, dp)
  // }
  // return result
}
console.log(maxSubArray([1]))

// @lc code=end
