/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length
  if (rows === 0) {
    return
  }
  const cols = grid[0].length
  let result = 0
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i === rows || j === cols || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(i, j + 1)
    dfs(i, j - 1)
    dfs(i - 1, j)
    dfs(i + 1, j)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        result++
        dfs(i, j)
      }
    }
  }
  return result
}
// @lc code=end
