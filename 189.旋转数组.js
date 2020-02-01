/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
var rotateArr = function (nums) {
  let last = nums[nums.length - 1]
  nums.length--
  nums.unshift(last)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0;i < k;i++) {
    rotateArr(nums)
  }
}
// @lc code=end

