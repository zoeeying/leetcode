/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 方法1：年轻时候写的狗屎代码
  // let temp = Number.MAX_SAFE_INTEGER
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length && j !== i; j++) {
  //     for (let k = 0; k < nums.length && k !== i && k !== j; k++) {
  //       temp = Math.min(temp, Math.abs(target - nums[i] - nums[j] - nums[k]))
  //     }
  //   }
  // }
  // return Math.min(temp + target, Math.abs(target - temp))
  // ************************************************
  // 方法2：参考三数之和的解法
  nums.sort((a, b) => a - b)
  const len = nums.length
  let ans = 0,
    minGap = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1,
      r = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > target) {
        if (sum - target < minGap) {
          ans = sum
          minGap = sum - target
        }
        r--
      } else if (sum < target) {
        if (target - sum < minGap) {
          ans = sum
          minGap = target - sum
        }
        l++
      } else {
        ans = sum
        minGap = target - sum
        // 去除重复的元素
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
  }
  return ans
}
threeSumClosest([-1, 2, 1, -4], 1)
// @lc code=end
