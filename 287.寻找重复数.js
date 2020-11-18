/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 方法一：暴力破解
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     return nums[i]
  //   }
  // }
  // ----------------------------------
  // 方法二：双指针
  let r = 0
  for (; r < nums.length; r++) {
    for (let l = 0; l < r; l++) {
      if (nums[r] === nums[l]) {
        return nums[r]
      }
    }
  }
}
// @lc code=end
