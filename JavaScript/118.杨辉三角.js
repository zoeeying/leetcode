/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return []
  }
  let result = [[1]]
  for (let i = 1; i < numRows; i++) {
    result[i] = [1]
    for (let j = 1; j < result[i - 1].length; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j - 1])
      if (result[i - 1][j] === 1) {
        break
      }
    }
    result[i].push(1)
  }
  return result
}

// @lc code=end
