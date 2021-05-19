/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  // start是当前选择的起点索引，用来控制不要出现重复的组合
  // temp是当前的集合，sum是当前集合的和
  const backtrack = (start, temp, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(temp.slice())
      }
      return
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i])
      backtrack(i, temp, sum + candidates[i])
      temp.pop()
    }
  }
  backtrack(0, [], 0)
  console.log(res)
  return res
}
combinationSum([2, 3, 5], 8)
// @lc code=end
