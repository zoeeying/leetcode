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
  // 官方题解
  if (!points.length) {
    return 0
  }
  // 按照第二个元素的大小排序
  points.sort((a, b) => a[1] - b[1])
  let pos = points[0][1] // 位置越往右越好
  let ans = 1 // 开始肯定能射中第一个气球
  for (let ballon of points) {
    // 如果气球的开始位置已经大于射气球的位置了
    // 那么把射气球的位置移到该气球的结束位置
    if (ballon[0] > pos) {
      pos = ballon[1]
      ans++
    }
  }
  return ans
}

// @lc code=end
