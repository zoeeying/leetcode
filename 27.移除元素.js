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
  // 方法一
  // for (let i = nums.length - 1;i >= 0;i--) {
  //   if (nums[i] === val) {
  //     nums.splice(i, 1)
  //   }
  // }
  // -----------------------------------
  // 方法二：双指针
  nums.sort((a, b) => a - b)
  let i = 0
  while (i < nums.length) {
    if (nums[i] < val) {
      i++
    } else if (nums[i] > val) {
      return nums.length
    } else {
      nums.splice(i, 1)
    }
  }
  return nums.length
}
// @lc code=end
