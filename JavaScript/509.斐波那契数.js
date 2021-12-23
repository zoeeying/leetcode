/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 方法1
// var fib = function (N) {
//   let arr = [0, 1]
//   for (let i = 2; i <= N; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
//   }
//   return arr[N]
// }

// 方法2
var fib = function (N) {
  if (N === 0) {
    return 0
  }
  if (N === 1) {
    return 1
  }
  return fib(N - 2) + fib(N - 1)
}
// @lc code=end

