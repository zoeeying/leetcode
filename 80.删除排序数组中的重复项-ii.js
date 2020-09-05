/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = nums.length - 1
  let r = nums.length - 1
  for (; l >= 0; l--) {
    if (nums[l] !== nums[l - 1] && nums[l - 1] !== undefined) {
      console.log(r)
      if (r - l + 1 > 2) {
        nums.splice(r - 1, r - l - 1)
      }
      r = l - 1
    }
  }
  if (r > 1) {
    nums.splice(0, r - 1)
  }
}
removeDuplicates([-3, -1, -1, 0, 0, 0, 0, 0, 2])
// @lc code=end
