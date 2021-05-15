/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
// H小时内，速度speed，能否吃完所有香蕉
const canFinish = (piles, speed, H) => {
  let time = 0
  for (let i = 0; i < piles.length; i++) {
    time += Math.ceil(piles[i] / speed)
  }
  return time <= H
}
var minEatingSpeed = function (piles, H) {
  // 二分法，1到Math.max(...piles)，寻找左侧边界
  let l = 1,
    r = Math.max(...piles)
  while (l < r) {
    let mid = Math.floor((r + l) / 2)
    if (canFinish(piles, mid, H)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
minEatingSpeed([3, 6, 7, 11], 8)
// @lc code=end
