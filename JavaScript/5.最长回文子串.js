/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 找到字符串str中以str[l]和str[r]为中心的最长回文子串
  // 如果l===r，返回长度为奇数的最长回文子串
  // 如果l!==r，返回长度为偶数的最长回文子串
  const palindrome = (str, l, r) => {
    while (str[l] === str[r] && r < str.length && l >= 0) {
      l--
      r++
    }
    return str.slice(l + 1, r)
  }
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i)
    let s2 = palindrome(s, i, i + 1)
    ans = ans.length < s1.length ? s1 : ans
    ans = ans.length < s2.length ? s2 : ans
  }
  return ans
}
// @lc code=end
