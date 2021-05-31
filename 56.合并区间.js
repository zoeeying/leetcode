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
  // 按照起始位置进行排序
  // 把第1个元素先放入ans，然后从第2个元素开始遍历intervals，比较是否相交
  // 如果相交，把当前元素区间和ans中最后那个元素区间进行合并
  intervals.sort((a, b) => a[0] - b[0])
  const ans = [intervals[0]]
  const len = intervals.length
  for (let i = 1; i < len; i++) {
    const intv = intervals[i]
    const top = ans[ans.length - 1]
    if (intv[0] <= top[1]) {
      // 注意，intv[1]不一定比top[1]大
      top[1] = Math.max(top[1], intv[1])
    } else {
      ans.push(intv)
    }
  }
  return ans
}
merge([
  [1, 4],
  [4, 5],
])
// @lc code=end
