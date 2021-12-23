/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 方法一：解答错误
  // let l = nums.length - 1
  // let r = nums.length - 1
  // for (; l >= 0; l--) {
  //   if (nums[l] !== nums[l - 1] && nums[l - 1] !== undefined) {
  //     console.log(r)
  //     if (r - l + 1 > 2) {
  //       nums.splice(r - 1, r - l - 1)
  //     }
  //     r = l - 1
  //   }
  // }
  // if (r > 1) {
  //   nums.splice(0, r - 1)
  // }
  // --------------------------------------------
  // 方法二：HashMap
  // const hash = {}
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   const num = nums[i]
  //   hash[num] = (hash[num] || 0) + 1
  //   if (hash[num] > 2) {
  //     nums.splice(i, 1)
  //   }
  // }
  // --------------------------------------------
  // 方法三：双指针，自己怎么写都是错误的
  // let len = nums.length
  // if (len < 3) {
  //   return len
  // }
  // let j = 1
  // for (let i = 2; i < len; i++) {
  //   if (nums[i] !== nums[j - 1]) {
  //     j++
  //     nums[j] = nums[i]
  //   }
  // }
  // return j + 1
  // --------------------------------
  // 方法四：别人的方法
  let t = 0
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    let next = nums[i + 1]
    if (cur === next) {
      t++
      if (t === 2) {
        nums.splice(i + 1, 1)
        t--
        i--
      }
    } else {
      t = 0
    }
  }
  return nums.length
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 3])
// @lc code=end
