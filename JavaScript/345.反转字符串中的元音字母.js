/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split('')
  const temp = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let result = ''
  let l = 0,
    r = arr.length - 1
  while (l < r) {
    if (!temp.includes(arr[l])) {
      l++
    }
    if (!temp.includes(arr[r])) {
      r--
    }
    if (temp.includes(arr[l]) && temp.includes(arr[r])) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  arr.forEach((item) => {
    result += item
  })
  return result
}
// @lc code=end
