/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 方法一
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
  //     return true
  //   }
  // }
  // return false
  // --------------------------------------------
  // 方法二：使用HashMap
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true
    }
    hashMap[nums[i]] = 1
  }
  return false
}
containsDuplicate([1, 2, 3, 1])
// @lc code=end
