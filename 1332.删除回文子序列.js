/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  // 判断一个字符串是否是回文
  const ifPalindrome = function (str) {
    let middle = (str.length / 2) ^ 0
    for (let i = 0; i < middle; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false
      }
    }
    return true
  }
  if (!s) {
    return 0
  }
}

// @lc code=end
