/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start

// 数组中每个元素出现的次数
var repeatNums = function (arr) {
  let eleNums = arr.reduce((pre, cur) => {
    if (cur in pre) {
      pre[cur]++
    } else {
      pre[cur] = 1
    }
    return pre
  }, {})
  return eleNums
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let nums = repeatNums(arr)
  let result = []
  for (let i in nums) {
    result.push(nums[i])
  }
  if (result.length === [...new Set(result)].length) {
    return true
  }
  return false
}
// @lc code=end

