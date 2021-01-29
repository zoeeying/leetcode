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
  const ans = []
  for (let i = 0; i < nums1.length; i++) {
    let item = -1
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        item = nums2[j]
        break
      }
    }
    ans.push(item)
  }
  return ans
}
// @lc code=end
