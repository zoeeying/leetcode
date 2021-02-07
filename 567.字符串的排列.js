/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 方法1：暴力破解
  // const aCode = 'a'.codePointAt(0)
  // const isAnagram = (a, b) => {
  //   const alpha = new Array(26).fill(0)
  //   if (a.length !== b.length) {
  //     return false
  //   }
  //   for (let i = 0; i < a.length; i++) {
  //     alpha[a[i].codePointAt(0) - aCode]++
  //     alpha[b[i].codePointAt(0) - aCode]--
  //   }
  //   return alpha.every((item) => item === 0)
  // }
  // for (let i = 0; i < s2.length; i++) {
  //   if (s1.includes(s2[i]) && isAnagram(s2.slice(i, i + s1.length), s1)) {
  //     return true
  //   }
  // }
  // return false
  // ---------------------------------------------------
  // 方法2
  let l = 0
  let r = 0
  while () {

  }
}
// @lc code=end
