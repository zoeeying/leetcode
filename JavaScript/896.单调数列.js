/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
var isMonotonous = function (arr, type) {
  for (let i = 0;i < arr.length;i++) {
    if (type === 1 ? (arr[i + 1] < arr[i]) : (arr[i + 1] > arr[i])) {
      return false
    }
  }
  return true
}
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  return (isMonotonous(A, 1) || isMonotonous(A, 2))
}
// @lc code=end

