/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 超时
  // let result = []
  // for (let i = 0; i < nums.length; i++) {
  //   let temp = 1
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i !== j) {
  //       temp *= nums[j]
  //     }
  //   }
  //   result.push(temp)
  // }
  // return result
  // ---------------------------------------
  // 超时again
  // let result = []
  // for (let i = 0; i < nums.length; i++) {
  //   let otherNums = [...nums]
  //   otherNums.splice(i, 1)
  //   result.push(otherNums.reduce((pre, cur) => pre * cur, 1))
  // }
  // return result
}
productExceptSelf([1, 2, 3, 4])
// @lc code=end
