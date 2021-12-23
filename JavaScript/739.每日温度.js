/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  // 方法一：暴力求解，双层循环
  // const ans = []
  // for (let i = 0; i < T.length; i++) {
  //   let item = 0
  //   for (let j = i; j < T.length; j++) {
  //     if (T[j] > T[i]) {
  //       item = j - i
  //       break
  //     }
  //   }
  //   ans.push(item)
  // }
  // return ans
  // ---------------------------------------
  // 方法二：单调递减栈
  const ans = new Array(T.length).fill(0)
  const stack = []
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack[stack.length - 1]
      ans[top] = i - top
      stack.pop()
    }
    stack.push(i)
  }
  return ans
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// @lc code=end
