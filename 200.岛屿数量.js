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
  if (!rows) {
    return 0
  }
  const cols = grid[0].length
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
  let ans = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        ans++
      }
    }
  }
  return ans
}
numIslands([
  ['1', '0', '1', '1', '1'],
  ['1', '0', '1', '0', '1'],
  ['1', '1', '1', '0', '1'],
])
// @lc code=end
