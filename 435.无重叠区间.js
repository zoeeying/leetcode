/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 可以先求最多有几个区间互不相交，需要按照终点升序排序
  const len = intervals.length
  if (!len) {
    return 0
  }
  intervals.sort((a, b) => a[1] - b[1])
  let end = intervals[0][1]
  let ans = 1 // 第一个区间
  for (let intv of intervals) {
    if (intv[0] >= end) {
      ans++
      end = intv[1]
    }
  }
  return len - ans
}

// @lc code=end
