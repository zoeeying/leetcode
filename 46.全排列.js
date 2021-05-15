/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const used = {} // 已经做出的选择，用来优化

  const backtrack = path => {
    if (path.length === nums.length) {
      res.push(path.slice()) // 拷贝一份path
      return // 结束递归
    }

    for (let i = 0; i < nums.length; i++) {
      // 时间复杂度很高
      // if (path.includes(nums[i])) {
      //   continue
      // }
      if (used[nums[i]]) {
        continue
      }
      path.push(nums[i])
      used[nums[i]] = true
      backtrack(path) // 基于选择的当前数，递归
      path.pop()
      used[nums[i]] = false
    }
  }
  backtrack([])
  return res
}
// @lc code=end
