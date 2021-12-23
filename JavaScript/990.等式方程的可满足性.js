/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const hash = {}
  for (let i = 0; i < equations.length; i++) {
    const equation = equations[i]
    const f = equation[0]
    const l = equation[3]
    if (equation.includes('!=')) {
      hash[f] = l
      hash[l] = f
    }
  }
}
equationsPossible(['b==a', 'c==a'])
// @lc code=end
