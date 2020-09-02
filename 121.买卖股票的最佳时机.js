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
  let r = 0
  let result = 0
  for (; r < prices.length; r++) {
    for (let l = 0; l < r; l++) {
      result = Math.max(prices[r] - prices[l], result)
    }
  }
  return result
}
// @lc code=end
