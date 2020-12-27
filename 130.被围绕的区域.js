/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length
  if (rows === 0) {
    return
  }
  const cols = board[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) {
      // 越界
      return
    }
    // 把O都变成A
    if (board[i][j] === 'O') {
      board[i][j] = 'A'
      // 四个方向进行DFS
      dfs(i + 1, j)
      dfs(i, j + 1)
      dfs(i - 1, j)
      dfs(i, j - 1)
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
        // 如果最外层是O，开始DFS，把跟O相连的O都变成A
        if (board[i][j] === 'O') {
          dfs(i, j)
        }
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
}
// @lc code=end
