/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 方法一：HashMap，自己想出来的
  // let hashMap = {}
  // const len = nums.length
  // for (let i = 0; i < len; i++) {
  //   const num = nums[i]
  //   hashMap[num] = (hashMap[num] || 0) + 1
  //   if (hashMap[num] >= len / 2) {
  //     return num
  //   }
  // }
  // ------------------------------------------------
  // 方法二：排序
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
  // ---------------------------------------------
  // 方法三：分治法
  // 将数组分成左右两部分
  // 分别求出左半部分的众数a1以及右半部分的众数a2
  // 随后在a1和a2中选出正确的众数
}
// @lc code=end
