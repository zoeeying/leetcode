/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const backtrack = (start, path) => {
    if (path.length === k) {
      res.push(path.slice())
      return // 不return也能通过，但是会有很多重复的
    }
    for (let i = start; i <= n; i++) {
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(1, [])
  return res
}
combine(4, 2)
// @lc code=end
