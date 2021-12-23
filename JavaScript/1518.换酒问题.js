/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  // let emptyBottles = numBottles
  // let ans = numBottles
  // while (emptyBottles >= numExchange) {
  //   const wines = Math.floor(emptyBottles / numExchange)
  //   emptyBottles = wines + (emptyBottles % numExchange)
  //   ans += wines
  // }
  // return ans
  // ---------------------------------------------------
  // 改进一下，不另外申明emptyBottles变量
  let ans = numBottles
  while (numBottles >= numExchange) {
    const wines = Math.floor(numBottles / numExchange)
    numBottles = wines + (numBottles % numExchange)
    ans += wines
  }
  return ans
}
// @lc code=end
