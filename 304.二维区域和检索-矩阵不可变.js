/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 * 两种前缀和方法：对每一行计算一维前缀和、对整个矩阵计算二维前缀和
 */

// @lc code=start
// 方法1：对每一行计算一维前缀和
// var NumMatrix = function (matrix) {
//   const rows = matrix.length
//   const cols = matrix[0].length
//   let preSum = []
//   for (let i = 0; i < rows; i++) {
//     let sum = [0]
//     for (let j = 0; j < cols; j++) {
//       sum[j + 1] = sum[j] + matrix[i][j]
//     }
//     preSum.push(sum)
//   }
//   this.preSum = preSum
// }

// NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
//   let ans = 0
//   for (let i = row1; i <= row2; i++) {
//     ans += this.preSum[i][col2 + 1] - this.preSum[i][col1]
//   }
//   return ans
// }
// ************************************************************
// 方法2：对整个矩阵计算二维前缀和，效率也没有很高
var NumMatrix = function (matrix) {
  let rows = 0
  let cols = 0
  if (matrix.length === 0) {
    rows = 1
    cols = 1
  } else {
    rows = matrix.length + 1
    cols = matrix[0].length + 1
  }
  const preSum = new Array(rows)
  for (let i = 0; i < rows; i++) {
    preSum[i] = new Array(cols)
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        preSum[i][j] = 0 // 第一行第一列都是0
      } else {
        preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
      }
    }
  }
  this.preSum = preSum
}

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.preSum[row2 + 1][col2 + 1] +
    this.preSum[row1][col1] -
    this.preSum[row1][col2 + 1] -
    this.preSum[row2 + 1][col1]
  )
}
NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
])
// @lc code=end
