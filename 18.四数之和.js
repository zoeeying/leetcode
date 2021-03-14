/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const twoSum = function (nums, start, target) {
  const ans = []
  let l = start,
    r = nums.length - 1
  while (l < r) {
    const left = nums[l]
    const right = nums[r]
    const sum = left + right
    if (sum < target) {
      while (l < r && left === nums[l]) {
        l++
      }
    } else if (sum > target) {
      while (l < r && right === nums[r]) {
        r--
      }
    } else {
      ans.push([nums[l], nums[r]])
      while (l < r && left === nums[l]) {
        l++
      }
      while (l < r && right === nums[r]) {
        r--
      }
    }
  }
  return ans
}
const threeSum = function (nums, start, target) {
  let ans = []
  const len = nums.length
  for (let i = start; i < len; i++) {
    const twoSums = twoSum(nums, i + 1, target - nums[i])
    for (let two of twoSums) {
      two.unshift(nums[i])
      ans.push(two)
    }
    // 第一个数字可能会重复，会导致重复的结果，所以需要跳过重复
    while (i < len - 1 && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return ans
}
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const threeSums = threeSum(nums, i + 1, target - nums[i])
    for (let three of threeSums) {
      three.unshift(nums[i])
      ans.push(three)
    }
    while (i < len - 1 && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return ans
}
// @lc code=end
