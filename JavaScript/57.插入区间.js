/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const len = intervals.length

  let ans = []
  let i = 0
  // 区间在newInterval左边，不相交
  while (i < len && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i])
    i++
  }

  // 有重叠区域，intervals[i][0] <= newInterval[1]很重要
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  ans.push(newInterval)

  // 区间在newInterval右边，不相交
  while (i < len) {
    ans.push(intervals[i])
    i++
  }
  return ans
}
insert([[1, 5]], [2, 3])
// @lc code=end
