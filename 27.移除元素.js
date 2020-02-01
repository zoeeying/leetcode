/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = nums.length - 1;i >= 0;i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
}
// @lc code=end

