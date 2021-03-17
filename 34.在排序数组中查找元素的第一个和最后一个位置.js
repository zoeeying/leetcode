/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length
  let l = 0,
    r = len - 1
  let start = -1,
    end = -1
  while (l <= r) {
    const mid = Math.floor((r + l) / 2)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      start = mid
      end = mid
      while (nums[start] === target && start >= 0) {
        start--
      }
      while (nums[end] === target && end <= len - 1) {
        end++
      }
      start++
      end--
      l++
      r--
    }
  }
  return [start, end]
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
// @lc code=end
