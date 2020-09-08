/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  const arr = [...nums]
  arr.sort((a, b) => b - a)
  const hash = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal',
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    rank = arr.indexOf(nums[i]) + 1
    nums[i] = hash[rank] ? hash[rank] : rank + ''
  }
  return nums
}
findRelativeRanks([5, 4, 3, 2, 1])

// @lc code=end
