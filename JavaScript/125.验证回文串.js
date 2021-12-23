/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 方法一：使用正则把字符串中非数字和字母的字符去掉
  // /\W|_/表示非字母和数字的正则
  s = s.replace(/\W|_/g, '').toLowerCase()
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
  // --------------------------------------
  // 方法二：双指针
  // const pattern = /^[a-zA-Z0-9]$/
  // let l = 0,
  //   r = s.length - 1
  // while (l < r) {
  //   if (!pattern.test(s[l])) {
  //     l++
  //     continue
  //   }
  //   if (!pattern.test(s[r])) {
  //     r--
  //     continue
  //   }
  //   if (s[l].toLowerCase() === s[r].toLowerCase()) {
  //     l++
  //     r--
  //   } else {
  //     return false
  //   }
  // }
  // return true
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))
// @lc code=end
