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
  // 方法一：错误！！！
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
  // 方法二：HashMap
  // let result = []
  // let hash = {}
  // for (let i = 0; i < nums1.length; i++) {
  //   const num = nums1[i]
  //   hash[num] = (hash[num] || 0) + 1
  // }
  // for (let i = 0; i < nums2.length; i++) {
  //   const num = nums2[i]
  //   if (hash[num] > 0) {
  //     result.push(num)
  //     hash[num]--
  //   }
  // }
  // return result
  // --------------------------------------------
  // 方法三：双指针，需要对数组进行排序
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let n1 = 0
  let n2 = 0
  const result = []
  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] > nums2[n2]) {
      n2++
    } else if (nums1[n1] < nums2[n2]) {
      n1++
    } else {
      result.push(nums1[n1])
      n1++
      n2++
    }
  }
  return result
}
console.log(intersect([1, 2, 2, 1], [2, 2]))
// @lc code=end
