/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let temp = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length && j !== i; j++) {
      for (let k = 0; k < nums.length && k !== i && k !== j; k++) {
        temp = Math.min(temp, Math.abs(target - nums[i] - nums[j] - nums[k]))
      }
    }
  }
  return Math.min(temp + target, Math.abs(target - temp))
}
threeSumClosest([0, 0, 0], 1)
// @lc code=end
