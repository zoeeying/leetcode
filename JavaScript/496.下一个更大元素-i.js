/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 方法1：暴力求解
  // const ans = []
  // for (let i = 0; i < nums1.length; i++) {
  //   let item = -1
  //   for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
  //     if (nums2[j] > nums1[i]) {
  //       item = nums2[j]
  //       break
  //     }
  //   }
  //   ans.push(item)
  // }
  // return ans
  // ****************************************************
  // 方法2：使用单调递减栈和HashTable
  // 找出nums2中每个元素的下一个更大的元素
  // const stack = [nums2[0]]
  // const hash = {}
  // const ans = []
  // for (let i = 1; i < nums2.length; i++) {
  //   while (nums2[i] > stack[stack.length - 1] && stack.length) {
  //     hash[stack.pop()] = nums2[i]
  //   }
  //   stack.push(nums2[i])
  // }
  // while (stack.length) {
  //   hash[stack.pop()] = -1
  // }
  // for (let i = 0; i < nums1.length; i++) {
  //   ans.push(hash[nums1[i]])
  // }
  // return ans
}
nextGreaterElement([4, 1, 2], [1, 3, 4, 2])
// @lc code=end
