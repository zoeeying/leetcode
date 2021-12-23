/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let ans = 0
  const rows = grid.length
  if (!rows) {
    return ans
  }
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        if (j + 1 >= cols || grid[i][j + 1] === 0) {
          ans++
        }
        if (j - 1 < 0 || grid[i][j - 1] === 0) {
          ans++
        }
        if (i - 1 < 0 || (i - 1 >= 0 && grid[i - 1][j] === 0)) {
          ans++
        }
        if (i + 1 >= rows || (i + 1 < rows && grid[i + 1][j] === 0)) {
          ans++
        }
      }
    }
  }
  return ans
}
islandPerimeter([[1, 0]])
// @lc code=end
