/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 双指针，感觉是滑动窗口
  const len = nums.length
  if (len < 3) {
    return len
  }
  let j = 1
  for (let i = 2; i < len; i++) {
    if (nums[i] !== nums[j - 1]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
}
// @lc code=end
