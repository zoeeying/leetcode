/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  // 方法1：暴力
  // const len = intervals.length
  // if (len === 1) {
  //   return [-1]
  // }
  // let ans = new Array(len)
  // for (let i = 0; i < len; i++) {
  //   let minStart = Number.MAX_SAFE_INTEGER
  //   let start = -1
  //   for (let j = 0; j < len; j++) {
  //     if (intervals[j][0] >= intervals[i][1] && intervals[j][0] < minStart) {
  //       minStart = intervals[j][0]
  //       start = j
  //     }
  //   }
  //   ans[i] = start
  // }
  // return ans
  // ********************************************************
  // 方法2：二分法
  // 先排序，把intervals处理成对象数组，存储每个区间的索引和左端点
  let sortedData = intervals
    .map((item, index) => {
      return {
        index,
        val: item[0],
      }
    })
    .sort((a, b) => a.val - b.val)
  let result = []

  for (let i = 0; i < intervals.length; i++) {
    let first = intervals[i][1]
    let l = 0
    let r = intervals.length
    while (l < r) {
      let mid = Math.floor((r + l) / 2)
      let second = sortedData[mid].val
      if (second >= first) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    // l超出了数组边界
    result.push(sortedData[l] === undefined ? -1 : sortedData[l].index)
  }
  return result
}
findRightInterval([
  [1, 4],
  [2, 3],
  [3, 4],
])

// @lc code=end
