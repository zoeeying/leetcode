/*
 * @lc app=leetcode.cn id=1712 lang=javascript
 *
 * [1712] 将数组分成三个子数组的方案数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  // 前缀和
  let preSum = [nums[0]]
  for (let i = 1; i < len; i++) {
    preSum[i] = preSum[i - 1] + nums[i]
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    // 前面i个元素的和大于等于后面所有元素的和，就不符合要求了，退出循环
    if (preSum[len - 1] - preSum[i] <= preSum[i]) {
      break
    }
    // 二分法
    let l = i + 1,
      r = len - 1
    while (l < r) {}
  }
}
waysToSplit([3, 2, 1])
// @lc code=end
