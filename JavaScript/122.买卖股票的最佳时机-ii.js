/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心算法：遍历一遍数组，只要第二天的价格比第一天的高，就把差额计算到总利润中
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    let differ = prices[i] - prices[i - 1]
    if (differ > 0) {
      profit += differ
    }
  }
  return profit
}
// @lc code=end
