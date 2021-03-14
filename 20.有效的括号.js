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
  // 用栈的写法
  const stack = []
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    stack.push(char)
    while (
      stack.length &&
      hash[stack[stack.length - 2]] === stack[stack.length - 1]
    ) {
      stack.pop()
      stack.pop()
    }
  }
  return !stack.length
  // ---------------------------------------
  // 别人的题解，用栈来保存左括号
  // const stack = []
  // const hash = {
  //   '(': ')',
  //   '{': '}',
  //   '[': ']',
  // }
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i]
  //   if (hash[char]) {
  //     // 把左括号推到栈中
  //     stack.push(char)
  //   } else {
  //     // 是右括号
  //     const top = stack[stack.length - 1]
  //     if (hash[top] === char) {
  //       stack.pop()
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // // stack中还有没有匹配到的左括号
  // return !stack.length
}

// @lc code=end
