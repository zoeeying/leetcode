/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const hash = { 0: 1 }
  let sum = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
}
checkSubarraySum([23, 2, 4, 6, 7])
// @lc code=end
