/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 从小到大排序
  // g.sort((a, b) => a - b)
  // s.sort((a, b) => a - b)
  // let count = 0
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] >= g[count]) {
  //     count++
  //   }
  // }
  // return count
  // ------------------------------------
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let j = 0
  let i = 0
  while (i <= s.length && j <= g.length) {
    if (s[i] >= g[j]) {
      j++
    }
    i++
  }
  return j
}
// @lc code=end
