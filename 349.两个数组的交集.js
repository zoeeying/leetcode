/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 方法1
  // return [...new Set(nums1.filter((a) => nums2.some((b) => b === a)))]

  // 方法2
  let result = []
  nums1.forEach((item) => {
    if (nums2.includes(item) && !result.includes(item)) {
      result.push(item)
    }
  })
  return result
}
// @lc code=end
