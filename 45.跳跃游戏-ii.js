/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxDistance = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > maxDistance) {
      return false
    }
    maxDistance = Math.max(maxDistance, nums[i] + i)
  }
  return true
}
// @lc code=end
