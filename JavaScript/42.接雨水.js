/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 方法1：暴力解法
  // 位置i前面（包括i）柱子的最大值leftMax，位置i（包括i）后面柱子的最大值rightMax
  // Math.min(leftMax, rightMax) - height[i]即为位置i能装的水
  // 超时
  // let ans = 0
  // const len = height.length
  // for (let i = 0; i < len; i++) {
  //   const leftMax = i + 1 > 0 ? Math.max(...height.slice(0, i + 1)) : 0
  //   const rightMax = i < len ? Math.max(...height.slice(i, len)) : 0
  //   ans += Math.min(leftMax, rightMax) - height[i]
  // }
  // return ans
  // ******************************************************
  // 方法2：暴力解法
  // let ans = 0
  // const len = height.length
  // for (let i = 0; i < len; i++) {
  //   let r_max = 0
  //   let l_max = 0
  //   for (let j = i; j < len; j++) {
  //     r_max = Math.max(r_max, height[j])
  //   }
  //   for (let j = i; j >= 0; j--) {
  //     l_max = Math.max(l_max, height[j])
  //   }
  //   ans += Math.min(r_max, l_max) - height[i]
  // }
  // return ans
  // ****************************************************
  // 方法3：labuladong的备忘录解法
  // const n = height.length
  // let ans = 0
  // let l_max = []
  // l_max[0] = height[0]
  // let r_max = []
  // r_max[n - 1] = height[n - 1]
  // for (let i = 1; i < n; i++) {
  //   l_max[i] = Math.max(height[i], l_max[i - 1])
  // }
  // for (let i = n - 2; i >= 0; i--) {
  //   r_max[i] = Math.max(height[i], r_max[i + 1])
  // }
  // for (let i = 1; i < n - 1; i++) {
  //   ans += Math.min(l_max[i], r_max[i]) - height[i]
  // }
  // return ans
  // *******************************************************
  // 方法4：labuladong的双指针解法
  if (!height.length) {
    return 0
  }
  const n = height.length
  let left = 0,
    right = n - 1
  let ans = 0
  let l_max = height[0]
  let r_max = height[n - 1]
  while (left <= right) {
    l_max = Math.max(l_max, height[left])
    r_max = Math.max(r_max, height[right])
    // 注意这里需要区分场景来分别增减左右指针
    if (l_max < r_max) {
      ans += l_max - height[left]
      left++
    } else {
      ans += r_max - height[right]
      right--
    }
  }
  return ans
}
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// @lc code=end
