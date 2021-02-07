/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort()
  while (stones.length > 2) {
    let big = stones.pop()
    let small = stones.pop()
    if (big > small) {
      stones.push(big - small)
    }
  }
  console.log(stones)
}
lastStoneWeight([2, 7, 4, 1, 8, 1])
// @lc code=end
