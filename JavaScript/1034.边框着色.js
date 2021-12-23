/*
 * @lc app=leetcode.cn id=1034 lang=javascript
 *
 * [1034] 边框着色
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, r0, c0, color) {
  const rows = grid.length
  if (rows === 0) {
    return
  }
  const cols = grid[0].length
  const point = grid[r0][c0]
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i === rows ||
      j === cols ||
      grid[i][j] !== point ||
      grid[i][j] === color
    ) {
      return
    }
    grid[i][j] = color
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  dfs(r0, c0)
  return grid
}

// @lc code=end
