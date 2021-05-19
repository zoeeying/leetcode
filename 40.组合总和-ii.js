/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  const backtrack = (start, path, total) => {
    if (total >= target) {
      if (total === target) {
        res.push(path.slice())
      }
      return
    }
    for (let i = start; i < candidates.length; i++) {
      // 因为candidates中有重复的元素，所以会出现重复的组合，需要去重
      if (i - 1 >= start && candidates[i - 1] === candidates[i]) {
        continue
      }
      path.push(candidates[i])
      backtrack(i + 1, path, total + candidates[i])
      path.pop()
    }
  }
  backtrack(0, [], 0)
  return res
}
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// @lc code=end
