/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start

// 超时

// ele在arr中排行第几？
var rank = function (arr, ele) {
  let arr2 = [...new Set(arr)]
  arr2.sort((a, b) => a - b)
  return arr2.indexOf(ele) + 1
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(rank(arr, arr[i]))
  }
  return result
}
// @lc code=end

