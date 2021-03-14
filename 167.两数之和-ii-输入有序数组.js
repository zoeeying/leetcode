/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 方法1：暴力破解
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers.includes(target - numbers[i])) {
  //     return [i + 1, numbers.lastIndexOf(target - numbers[i]) + 1]
  //   }
  // }
  // 方法2：由于numbers已经排序，可以考虑使用左右指针
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    const sum = nums[l] + nums[r]
    if (sum > target) {
      r--
    } else if (sum < target) {
      l++
    } else {
      return [l + 1, r + 1]
    }
  }
  return []
}
// @lc code=end
