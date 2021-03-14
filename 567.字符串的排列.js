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
  // *************************************************************
  // 方法2：滑动窗口
  let l = 0,
    r = 0
  const s1Map = {}
  for (let s of s1) {
    s1Map[s] = (s1Map[s] || 0) + 1
  }
  let valid = 0 // 滑动窗口中，某个字符如果个数与s1中该字符的个数相同，valid++
  const winMap = {}
  for (; r < s2.length; r++) {
    const c = s2[r]
    if (s1Map[c]) {
      winMap[c] = (winMap[c] || 0) + 1
      if (s1Map[c] === winMap[c]) {
        valid++
      }
    }

    // 窗口长度大于等于s1.length，就要收缩窗口
    // 等于的时候，进入while循环，会立马判断窗口中是否是一个合法的排列，如果是的话，会立马返回true
    while (r - l + 1 >= s1.length) {
      if (valid === Object.keys(s1Map).length) {
        return true
      }
      const d = s2[l]
      if (s1Map[d]) {
        if (winMap[d] === s1Map[d]) {
          valid--
        }
        winMap[d]--
      }

      l++
    }
  }
  return false
}
console.log(checkInclusion('a', 'ba'))
// @lc code=end
