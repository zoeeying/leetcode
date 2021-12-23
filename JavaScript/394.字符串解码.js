/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 方法1：递归，效率有点低
  // let str = s
  // const num_reg = /^\d*$/
  // while (str.includes('[')) {
  //   let startIndex = 0 // 括号开始位置索引
  //   let endIndex = 0 // 括号结束位置索引
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === '[') {
  //       startIndex = i
  //     } else if (str[i] === ']') {
  //       endIndex = i
  //       break
  //     }
  //   }
  //   // 根据startIndex，算出numIndex
  //   let numIndex = 0
  //   while (!num_reg.test(str.slice(numIndex, startIndex))) {
  //     numIndex++
  //   }
  //   str =
  //     str.slice(0, numIndex) +
  //     str.slice(startIndex + 1, endIndex).repeat(str.slice(numIndex, startIndex) * 1) +
  //     str.slice(endIndex + 1)
  // }
  // return str
  // *****************************************************************
  // 方法2：栈解法
  const numStack = []
  const strStack = []
  let num = 0 // 重复字符的倍数
  let str = '' // 括号中的字符
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      num = num * 10 + s[i] * 1
    } else if (s[i] === '[') {
      strStack.push(str)
      str = ''
      numStack.push(num)
      num = 0
    } else if (s[i] === ']') {
      str = strStack.pop() + str.repeat(numStack.pop())
    } else {
      str += s[i]
    }
  }
  return str
}
// @lc code=end
