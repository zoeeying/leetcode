/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 方法一：递归
  const res = [[]]
  // 每遍历一个num，在之前子集中的每个集合中追加这个num，生成新的子集
  for (let num of nums) {
    const temp = []
    for (let r of res) {
      temp.push([...r, num])
    }
    res.push(...temp)
  }
  return res

  // ****************************************
  // 方法二：回溯
  // const res = []
  // const backtrack = (start, path) => {
  //   res.push(path.slice())
  //   for (let i = start; i < nums.length; i++) {
  //     path.push(nums[i])
  //     backtrack(i + 1, path)
  //     path.pop()
  //   }
  // }
  // backtrack(0, [])
  // return res
}
subsets([1, 2, 3])
// @lc code=end
