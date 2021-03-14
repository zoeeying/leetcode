/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 方式1：1288题的解法
  // intervals.sort((a, b) => {
  //   if (a[0] === b[0]) {
  //     return b[1] - a[1]
  //   }
  //   return a[0] - b[0]
  // })
  // const len = intervals.length
  // let start = intervals[0][0]
  // let end = intervals[0][1]
  // let ans = []
  // for (let i = 1; i < len; i++) {
  //   const intv = intervals[i]
  //   if (intv[0] >= start && intv[1] <= end) {
  //     continue
  //   }
  //   if (intv[0] <= end) {
  //     end = intv[1]
  //   }
  //   if (intv[0] > end) {
  //     ans.push([start, end])
  //     start = intv[0]
  //     end = intv[1]
  //   }
  // }
  // ans.push([start, end])
  // return ans
  // ***********************************************
  // 方式2：labuladong解法
  // 把第1个元素先放入ans，然后从第2个元素开始遍历intervals，比较是否相交
  // 如果相交，把当前元素和ans中最后那个元素的区间进行合并
  // 按照起始位置进行排序
  intervals.sort((a, b) => a[0] - b[0])
  const len = intervals.length
  const ans = [intervals[0]]
  for (let i = 1; i < len; i++) {
    const intv = intervals[i]
    const lastAns = ans[ans.length - 1]
    if (intv[0] <= lastAns[1]) {
      lastAns[1] = Math.max(intv[1], lastAns[1])
    } else {
      ans.push(intv)
    }
  }
  console.log(ans)
  return ans
}
merge([
  [1, 4],
  [4, 5],
])
// @lc code=end
