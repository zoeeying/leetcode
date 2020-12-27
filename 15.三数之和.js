/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  const len = nums.length
  if (len < 3) {
    return result
  }
  for (let i = 0; i < nums.length; i++) {
    let hash = {}
    for (let j = 0; j < nums.length && i !== j; j++) {
      // 找到两数之和等于0-nums[i]
      const target = 0 - nums[i]
      if (hash[nums[j]] !== undefined) {
      }
      hash[target - nums[j]] = nums[j]
    }
  }
  return result
}
console.log(threeSum([-5, 0, -2, 3, -2, 1, 1, 3, 0, -5, 3, 3, 0, -1]))
// @lc code=end
