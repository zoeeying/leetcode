/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start

// ele在arr中排行第几？
var rank = function (arr, ele) {
  let arr2 = [...new Set(arr)]
  let result = 1 // 初始值是最小
  for (let i = 0;i < arr2.length;i++) {
    if (arr2[i] < ele) {
      result += 1
    }
  }
  return result
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let result = []
  for (let i = 0;i < arr.length;i++) {
    result.push(rank(arr, arr[i]))
  }
  return result
}
// @lc code=end

