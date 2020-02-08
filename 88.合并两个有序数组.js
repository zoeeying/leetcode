/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums1[i] !== 0 || i < m) {
      break
    }
    nums1.length--
  }
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  nums1.sort((a, b) => a - b)
}

// @lc code=end

