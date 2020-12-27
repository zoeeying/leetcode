/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 方法1：直观想法
  // let maxDistance = 0
  // let len = nums.length
  // for (let i = 0; i < len; i++) {
  //   if (i > maxDistance) {
  //     return false
  //   }
  //   maxDistance = Math.max(maxDistance, nums[i] + i)
  // }
  // return true
  // ----------------------------------------
  // 方法2：优化写法
  let maxDistance = 0,
    len = nums.length
  // 只有在maxDistance小于len-1，并且当前位置小于等于maxDistance的时候
  // 才遍历
  for (let i = 0; maxDistance < len - 1 && i <= maxDistance; i++) {
    maxDistance = Math.max(maxDistance, nums[i] + i)
  }
  return maxDistance >= len - 1
}
// @lc code=end
