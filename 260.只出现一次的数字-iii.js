/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 使用HashMap
  // let hash = {}
  // let ans = []
  // for (let i = 0; i < nums.length; i++) {
  //   hash[nums[i]] = (hash[nums[i]] || 0) + 1
  // }
  // Object.keys(hash).forEach((item) => {
  //   if (hash[item] === 1) {
  //     ans.push(item)
  //   }
  // })
  // return ans
  // -----------------------------
  // 元素的首次索引和最后索引如果相同，那么它们就只是出现一次
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      ans.push(nums[i])
    }
  }
  return ans
}
singleNumber([1, 2, 1, 3, 2, 5])
// @lc code=end
