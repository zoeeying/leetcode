/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// 找到重复的数！找到丢失的数！分两步走！不要混在一起！

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let renum = 0; lostnum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      renum = nums[i]
      break
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      lostnum = i
      break
    }
  }
  return [renum, lostnum]
}
// @lc code=end

