/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 转换成最多有几个区间互不相交，边界相同也不可以
  const len = points.length
  if (!len) {
    return 0
  }
  points.sort((a, b) => a[1] - b[1])
  let ans = 1 // 第一个区间
  let end = points[0][1]
  for (let point of points) {
    if (point[0] > end) {
      ans++
      end = point[1]
    }
  }
  return ans
}

// @lc code=end
