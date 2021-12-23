/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // 按照起点升序排序，按照终点降序排序
  // 终点降序排序是为了处理起点相同的情况
  // 如果相邻两个区间相交，需要把他们两个合并起来，然后再去找被他们覆盖的区间
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  let cover = 0 // 被覆盖的区间个数
  // left和right用来记录合并区间的起点和终点
  let left = intervals[0][0]
  let right = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    const intv = intervals[i]
    // 被覆盖
    if (intv[1] <= right && intv[0] >= left) {
      cover++
    }
    // 相交
    if (intv[0] <= right && intv[1] >= right) {
      right = intv[1]
    }
    // 不相交
    if (intv[0] > right) {
      left = intv[0]
      right = intv[1]
    }
  }
  return intervals.length - cover
}
// @lc code=end
