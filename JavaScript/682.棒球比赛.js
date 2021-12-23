/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = []
  for (let o of ops) {
    const len = stack.length
    if (o === 'C') {
      stack.pop()
    } else if (o === 'D') {
      stack.push(stack[len - 1] * 2)
    } else if (o === '+') {
      stack.push(Number(stack[len - 1]) + Number(stack[len - 2]))
    } else {
      stack.push(Number(o))
    }
  }
  return stack.reduce((count, prev) => count + prev)
}
calPoints(['5', '2', 'C', 'D', '+'])
// @lc code=end
