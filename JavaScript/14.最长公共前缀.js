/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var returnSet = function (strs, n) {
    let set = new Set()
    for (let i = 0; i < strs.length; i++) {
      set.add(strs[i][n])
    }
    return set
  }
  if (strs.length) {
    let result = ''
    let minLen = Math.min(...strs.map((item) => item.length))
    for (let i = 0; i < minLen; i++) {
      if (returnSet(strs, i).size !== 1) {
        return result.length ? result : ''
      }
      result += [...returnSet(strs, i)]
    }
    return result
  }
  return ''
}
// @lc code=end
