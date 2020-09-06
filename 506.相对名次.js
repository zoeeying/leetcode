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
// var findRelativeRanks = function (nums) {
//   // 找出n在nums中排名第几
//   var findRank = (nums, n) => {
//     let arr = JSON.parse(JSON.stringify(nums))
//     // 从大到小排列
//     arr.sort((a, b) => b - a)
//     return arr.indexOf(n) + 1
//   }

//   let result = []
//   for (let i = 0; i < nums.length; i++) {
//     result.push(findRank(nums, nums[i]))
//   }
//   let hash = {
//     1: 'Gold Medal',
//     2: 'Silver Medal',
//     3: 'Bronze Medal',
//   }
//   return result.map((item) => (hash[item] ? hash[item] : item + ''))
// }

var findRelativeRanks = function (nums) {}
findRelativeRanks([5, 4, 3, 2, 1])

// @lc code=end
