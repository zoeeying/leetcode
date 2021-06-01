/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start

/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
  // 方法1：用栈的写法
  // const stack = []
  // const hash = {
  //   '(': ')',
  //   '{': '}',
  //   '[': ']',
  // }
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i]
  //   stack.push(char)
  //   while (
  //     stack.length &&
  //     hash[stack[stack.length - 2]] === stack[stack.length - 1]
  //   ) {
  //     stack.pop()
  //     stack.pop()
  //   }
  // }
  // return !stack.length
  // **************************************************
  // 方法2：把左括号放入栈中
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = []
  for (let s of str) {
    if (hash[s] !== undefined) {
      stack.push(s)
    } else {
      const top = stack[stack.length - 1]
      if (hash[top] === s) {
        stack.pop()
      } else {
        // 括号不匹配
        return false
      }
    }
  }
  // 如果stack不是空，说明不是有效的括号字符串
  return !stack.length
}

// @lc code=end
