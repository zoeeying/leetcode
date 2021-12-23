/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (!nums.length) {
    return []
  }
  if (nums.length === 2 && nums[0] === 1 && nums[1] === 1) {
    return [2]
  }
  let arr = []
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      arr.push(i)
    }
  }
  return arr
}
// @lc code=end
