/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 贪心+栈（后入先出）
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!stack.includes(char)) {
      // 千万注意，这里不能声明变量来保存stack.length
      while (
        stack.length &&
        stack[stack.length - 1] > char && // 栈顶元素的字典序比当前元素大
        s.indexOf(stack[stack.length - 1], i) > i // 当前元素位置后面还有栈顶的元素
      ) {
        stack.pop()
      }
      stack.push(char)
    }
  }
  return stack.join('')
}
removeDuplicateLetters('bcabc')
// @lc code=end
