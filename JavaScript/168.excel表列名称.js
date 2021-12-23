/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

var convertToTitle = function (n) {
  let hash = {}
  for (let i = 65;i < 91;i++) {
    hash[i - 64] = String.fromCharCode(i)
  }
  let result = ''
  while ((n - n % 26) / 26 > 1) {
    n = (n - n % 26) / 26
    result += 'Z'
  }
  return result + hash[n % 26]
}
// convertToTitle(701)

console.log(convertToTitle(26))
// @lc code=end

