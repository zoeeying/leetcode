/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  let result = [[1]]
  for (let i = 1; i <= rowIndex; i++) {
    result[i] = [1]
    for (let j = 1; j < result[i - 1].length; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j - 1])
      if (result[i - 1][j] === 1) {
        break
      }
    }
    result[i].push(1)
  }
  return result[rowIndex]
}
// @lc code=end
