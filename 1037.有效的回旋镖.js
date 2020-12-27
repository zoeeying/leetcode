/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  let x = points[1][1] - points[0][1]
  let y = points[1][0] - points[0][0]
  let m = points[2][1] - points[0][1]
  let n = points[2][0] - points[0][0]
  return x * n !== y * m
}

// @lc code=end
