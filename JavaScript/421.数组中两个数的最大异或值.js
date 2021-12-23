/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  // 方法1：暴力破解
  if (nums.length <= 1) {
    return 0
  }
  let ans = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      ans = Math.max(ans, nums[i] ^ nums[j])
    }
  }
  return ans
  // *************************************************
  // 方法2：官方题解，需要用到位运算
}
findMaximumXOR([3, 10, 5, 25, 2, 8])
// @lc code=end
