/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 自己的解法，简单粗暴
  // if (word.length === 1) {
  //   return true
  // }
  // // 小写字母97-122，大写字母65-90
  // if (
  //   [...word].every((item) => item.codePointAt(0) < 97) ||
  //   [...word].every((item) => item.codePointAt(0) >= 97)
  // ) {
  //   return true
  // }
  // // 大小写混写，且长度大于1
  // const [first, ...rest] = word
  // if (first.codePointAt(0) >= 97) {
  //   return false
  // }
  // return rest.every((item) => item.codePointAt(0) >= 97)
  // --------------------------------------
  // 看看别人的写法，正则表达式
  let reg = /^(([A-Z]+)|([a-z]+)|([A-Z][a-z]+))$/
  return reg.test(word)
}
console.log(detectCapitalUse('F'))
// @lc code=end
