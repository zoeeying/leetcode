/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  // 自己的思路，双指针
  // let left = 0
  // let right = S.length - 1
  // let arr = S.split('')
  // const pattern = /^[a-zA-Z]$/
  // while (left < right) {
  //   if (pattern.test(arr[left]) && pattern.test(arr[right])) {
  //     let temp = arr[left]
  //     arr[left] = arr[right]
  //     arr[right] = temp
  //     left++
  //     right--
  //   } else if (!pattern.test(arr[left])) {
  //     left++
  //   } else if (!pattern.test(arr[right])) {
  //     right--
  //   }
  // }
  // return arr.join('')
  // -----------------------------------------------
  // 别人的思路
  const stack = S.replace(/[^a-z]/gi, '').split('') // 把所字母都放到栈中
  return (
    S.split('')
      // 如果遍历到的是字母，就把栈顶的字符替换过来，否则就用原来的字符
      .map((s) => (/[a-z]/i.test(s) ? stack.pop() : s))
      .join('')
  )
}
console.log(reverseOnlyLetters('abc'))
// @lc code=end
