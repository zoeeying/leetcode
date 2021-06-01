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
  // 把与边界上的'O'相连的区域都变成'A'
  // 最后把'O'变成'X'，把'A'变成'O'
  const rows = board.length
  if (!rows) {
    return board
  }
  const cols = board[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i === rows || j === cols) {
      return
    }
    if (board[i][j] === 'A' || board[i][j] === 'X') {
      return
    }
    board[i][j] = 'A'
    dfs(i, j + 1)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i - 1, j)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O' && (i === 0 || j === 0 || i === rows - 1 || j === cols - 1)) {
        dfs(i, j)
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === 'A') {
        board[i][j] = 'O'
      }
    }
  }
  return board
}
solve([['X']])
// @lc code=end
