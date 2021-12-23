/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let l = 0,
    r = k - 1
  let result = []
  for (; r < nums.length; r++) {
    let temp = nums[l]
    for (; l <= r; l++) {
      temp = Math.max(temp, nums[l])
    }
    result.push(temp)
    l = r - k + 2
  }
  return result
}
maxSlidingWindow([1, -1], 1)
// @lc code=end
