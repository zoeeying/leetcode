/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const countDegree = (arr) => {
  const hash = {}
  let degree = 0
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1
    degree = Math.max(degree, hash[arr[i]])
  }
  return degree
}
var findShortestSubArray = function (nums) {
  const numsDegree = countDegree(nums)
  let l = 0,
    r = 0
  for (; r < nums.length; r++) {
    if (countDegree(nums.slice(l, r + 1)) === numsDegree) {
      while (countDegree(nums.slice(l, r + 1)) === numsDegree) {
        l++
      }
      return r - l + 2
    }
  }
}
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]))
// @lc code=end
