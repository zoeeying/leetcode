/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// // 找出连续的不重复的子字符串
// var continuousStringLeft = function (s) {
//   let str = s[0]
//   for (let i = 1; i < s.length; i++) {
//     if (str.includes(s[i])) {
//       break
//     }
//     str += s[i]
//   }
//   return str
// }
// var continuousStringRight = function (s) {
//   let str = s[s.length - 1]
//   for (let i = s.length - 2; i >= 0; i--) {
//     if (str.includes(s[i])) {
//       break
//     }
//     str = s[i] + str
//   }
//   return str
// }
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let s1 = s
//   let s2 = s
//   let arr = []
//   while (s1.length) {
//     arr.push(continuousStringRight(s1))
//     s1 = s1.slice(0, s1.lastIndexOf(continuousStringRight(s1)))
//   }
//   while (s2.length) {
//     arr.push(continuousStringLeft(s2))
//     s2 = s2.slice(continuousStringLeft(s2).length)
//   }
//   console.log(arr)

//   return arr.length ? Math.max(...arr) : 0
// }
// console.log(lengthOfLongestSubstring('asjrgapa'))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map() // 申请一个 map，用来保存字符下标
  let maxlen = 0 // 子串长度
  let left = 0 // 子串左边界
  let right = 0 // 子串右边界
  let char // 每个字符
  const slen = s.length // 字符串长度
  for (; right < slen; right++) {
    char = s[right]
    // 如果和前面的有重复，则子串左端应移动到之前重复元素的下一个位置
    left = map.has(char) ? Math.max(left, map.get(char) + 1) : left
    // 记录每个字符的下标位置
    map.set(char, right)
    // 更新长度
    maxlen = Math.max(maxlen, right - left + 1)
  }
  return maxlen
}
// @lc code=end
