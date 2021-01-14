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
  const len = intervals.length
  if (len <= 1) {
    return 0
  }
  // 按照结束位置排序一下
  intervals.sort((a, b) => a[1] - b[1])
  let ans = -1
  let pos = intervals[0][1]
  for (let interval of intervals) {
    if (interval[0] < pos) {
      ans++
    } else {
      pos = interval[1]
    }
  }
  return ans
}

// @lc code=end
