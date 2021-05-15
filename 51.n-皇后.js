/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }

  const res = []
  // 是否可以在board的row行col列放置皇后
  const isValid = (row, col) => {
    // 检查当前列是否有皇后
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    // 检查左上这条线上是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    // 检查右上这条线上是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    return true
  }

  const backtrack = row => {
    // row超过了最后一行
    if (row === n) {
      const boardString = board.slice() // 拷贝一份board
      for (let i = 0; i < n; i++) {
        boardString[i] = boardString[i].join('')
      }
      res.push(boardString)
      return
    }
    // 遍历当前行的每一列
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q'
        backtrack(row + 1)
        board[row][col] = '.'
      }
    }
  }
  backtrack(0)
  return res
}
// @lc code=end
