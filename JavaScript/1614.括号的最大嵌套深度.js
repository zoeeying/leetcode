/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // 方法1：自己的解法
  // let stack = []
  // let ans = 0
  // const hash = {
  //   '(': ')',
  //   ')': '(',
  // }
  // for (let i = 0; i < s.length; i++) {
  //   const ss = s[i]
  //   if (hash[ss] === stack[stack.length - 1]) {
  //     stack.pop()
  //   } else if (hash[ss] !== undefined) {
  //     stack.push(ss)
  //   }
  //   ans = Math.max(ans, stack.length)
  // }
  // return ans
  // ********************************************
  // 方法2：别人的解法
  let ans = 0
  let curr = 0 // 当前的深度
  for (let o of s) {
    // 遇到'('，当前深度加1，同时更新最大深度
    if (o === '(') {
      curr++
      ans = Math.max(ans, curr)
    } else if (o === ')') {
      curr--
    }
  }
  return ans
}
maxDepth('1+(2*3)/(2-1)')
// @lc code=end
