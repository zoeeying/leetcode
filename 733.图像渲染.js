/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rows = image.length
  if (rows === 0) {
    return
  }
  cols = image[0].length
  const point = image[sr][sc]
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i === rows ||
      j === cols ||
      image[i][j] !== point ||
      image[i][j] === newColor
    ) {
      return
    }
    image[i][j] = newColor
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  dfs(sr, sc)
  return image
}

// @lc code=end
