/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 方法1：双指针
  // let result = 0
  // for (let r = 0; r < prices.length; r++) {
  //   for (let l = 0; l < r; l++) {
  //     result = Math.max(prices[r] - prices[l], result)
  //   }
  // }
  // return result
  // ------------------------------------------
  // 方法2：贪心、动态规划
  let minPrice = Number.MAX_SAFE_INTEGER,
    maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(prices[i] - minPrice, maxProfit)
  }
  return maxProfit
}
// @lc code=end
