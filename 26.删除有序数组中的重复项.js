/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 不要在数组中间删除元素，不要使用额外的数组空间
  // 使用双指针技巧：快慢指针

  const n = nums.length
  if (n === 0) {
    return 0
  }
  let fast = 1,
    slow = 0
  while (fast < n) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast] // 维护nums[0...slow]无重复
    }
    fast++
  }
  return slow + 1
}
// @lc code=end
