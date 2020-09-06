/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let indexStart = 0 // 从哪个下标开始查找元素的索引
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(nums[i], indexStart)
    if (index !== i) {
      if (i - index <= k) {
        return true
      } else {
        indexStart++
      }
    }
  }
  return false
}
// @lc code=end
