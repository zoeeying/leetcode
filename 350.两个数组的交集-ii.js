/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 方法1：错误！！！
  // const twoPointers = (arr1, arr2) => {
  //   let result = []
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (arr1[i] === arr2[j]) {
  //         result.push(arr1[i])
  //         break
  //       }
  //     }
  //   }
  //   return result
  // }
  // if (nums1.length > nums2.length) {
  //   return twoPointers(nums2, nums1)
  // }
  // return twoPointers(nums1, nums2)
  // ----------------------------------------
  // 方法二：
}
console.log(intersect([1, 2], [1, 1]))
// @lc code=end
