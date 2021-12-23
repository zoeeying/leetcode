/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
// 方法1：自己写的，性能不高
// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//   this.nums = nums
// }

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//   const len = this.nums.length
//   const preSum = [0]
//   for (let i = 0; i < len; i++) {
//     preSum[i + 1] = preSum[i] + this.nums[i]
//   }
//   return preSum[right + 1] - preSum[left]
// }

// **********************************************************
// 方法2：优化一下处理方式，把前缀和放在实例属性中
var NumArray = function (nums) {
  this.preSum = [0]
  const len = nums.length
  for (let i = 0; i < len; i++) {
    this.preSum[i + 1] = this.preSum[i] + nums[i]
  }
}

NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
