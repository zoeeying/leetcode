/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 方法一
  // if (target < nums[0]) {
  //   return 0
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] >= target) {
  //     return i
  //   }
  // }
  // return nums.length
  // ----------------------------------------
  // 方法二：二分查找算法
  const len = nums.length
  let l = 0,
    r = len - 1,
    result = len
  while (l <= r) {
    let mid = ((r - l) >> 1) + l
    if (target <= nums[mid]) {
      result = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return result
}
searchInsert([1, 3, 5, 6], 5)
// @lc code=end
