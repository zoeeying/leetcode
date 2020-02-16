/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  // 数组去重
  let arr = [...new Set(candies)]
  if (arr.length > candies.length / 2) {
    return candies.length / 2
  }
  return arr.length
}
// @lc code=end

