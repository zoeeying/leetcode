/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 简单粗暴解法
  // let sortedS = [...s].sort().join('')
  // let sortedT = [...t].sort().join('')
  // return sortedT === sortedS
  // ---------------------------------
  // 使用HashTable
  // 该解法需要考虑边界条件
  // if (s.length !== t.length) {
  //   return false
  // }
  // const hash = {}
  // for (let i = 0; i < s.length; i++) {
  //   hash[s[i]] = (hash[s[i]] || 0) + 1
  // }
  // for (let i = 0; i < t.length; i++) {
  //   if (hash[t[i]] === undefined) {
  //     return false
  //   }
  //   hash[t[i]]--
  //   if (hash[t[i]] < 0) {
  //     return false
  //   }
  // }
  // return true
  // ---------------------------------
  // 别人的解法，考虑进阶情况
  if (s.length !== t.length) {
    return false
  }
  const arr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    arr[s.codePointAt(i) - 97]++
    arr[t.codePointAt(i) - 97]--
  }
  // return !arr.some((item) => Boolean(item))
  // 简写如下
  return !arr.some(Boolean)
}
// @lc code=end
