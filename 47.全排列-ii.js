/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 给“选择”去重，充分剪枝
  const res = []
  const used = new Array(nums.length).fill(false) // 当前索引的数字是否使用过
  nums.sort((a, b) => a - b) // 排序，把重复数字放到一起

  const backtrack = path => {
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 当前索引的数字使用过了
      if (used[i]) {
        continue
      }
      // 当前可做的选择不能重复
      // 当前索引的数字和上一个索引的数字相同，且上一个索引的数字没有使用过
      // 如果上一个索引的数字被使用过，那么是不会出现在当前选项中的
      // 这个剪枝非常重要
      if (nums[i - 1] === nums[i] && !used[i - 1]) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      backtrack(path)
      path.pop()
      used[i] = false
    }
  }
  backtrack([])
  return res
}
permuteUnique([1, 1, 2])
// @lc code=end

// @after-stub-for-debug-begin
module.exports = permuteUnique
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = permuteUnique
// @after-stub-for-debug-end
