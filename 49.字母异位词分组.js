/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = {}
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i]
    let key = Array.from(str).sort().join()
    if (hash[key]) {
      hash[key].push(str)
    } else {
      hash[key] = [str]
    }
  }
  return Object.values(hash)
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
// @lc code=end
