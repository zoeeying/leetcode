/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 方法一：暴力破解
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix[i][j] === target) {
  //       return true
  //     }
  //   }
  // }
  // return false
  // -------------------------------------------------------
  // 方法二：暴力破解
  // for (let i = 0; i < matrix.length; i++) {
  //   if (matrix[i].includes(target)) {
  //     return true
  //   }
  // }
  // return false
  // --------------------------------------------------------------
  // 方法三：看看别人是使用二分法来进行高效查询的
  // 二分法，把二位数组想象成一个展开的一维数组
  if (!matrix || !matrix.length) {
    return false
  }
  const rows = matrix.length
  const cols = matrix[0].length
  let left = 0,
    right = rows * cols - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    // 根据mid，推算mid对应的元素的坐标
    const i = Math.floor(mid / cols)
    const j = mid - i * cols
    if (matrix[i][j] > target) {
      right = mid - 1
    } else if (matrix[i][j] < target) {
      left = mid + 1
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
