/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length
  if (rows === 0) {
    return
  }
  const cols = grid[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i === rows || j === cols || grid[i][j] === 0) {
      return 0
    }
    grid[i][j] = 0
    let temp = 1
    temp += dfs(i - 1, j)
    temp += dfs(i + 1, j)
    temp += dfs(i, j + 1)
    temp += dfs(i, j - 1)
    return temp
  }
  let result = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        result = Math.max(result, dfs(i, j))
      }
    }
  }
  return result
}

// @lc code=end
