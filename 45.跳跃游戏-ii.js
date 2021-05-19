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
  // labuladong解法
  let len = nums.length
  let maxDistance = 0 // 索引i到end起跳，最远能到的距离
  let end = 0 // 站在索引i，最多能跳到索引end
  let jumps = 0
  for (let i = 0; i < len - 1; i++) {
    maxDistance = Math.max(maxDistance, nums[i] + i)

    if (end === i) {
      jumps++
      end = maxDistance
    }
  }
  return jumps
}
console.log(jump([2, 3, 1, 1, 4]))
// @lc code=end
