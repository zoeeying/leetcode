/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start

/* 
  // 超时
  let arr2 = [...new Set(arr)]
  arr2.sort((a, b) => a - b)
  result.push(arr2.indexOf(arr[i]) + 1)
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // 考虑用Map
  const len = arr.length
  const map = new Map()
  let index = 1
  const arr2 = [...arr].sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (!map.has(arr2[i])) {
      map.set(arr2[i], index++)
    }
  }
  const result = []
  for (let i = 0; i < len; i++) {
    if (map.has(arr[i])) {
      result.push(map.get(arr[i]))
    }
  }
  return result
}

// @lc code=end
