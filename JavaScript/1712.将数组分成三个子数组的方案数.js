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
  // 方法1：前缀和+双层循环，超时
  // const len = nums.length
  // if (len === 0) {
  //   return 0
  // }
  // // 前缀和，preSum[i]是nums[0]到nums[i]的和
  // // 还有一种前缀和，preSum[i]是nums[0]到nums[i-1]的和
  // let preSum = [nums[0]]
  // for (let i = 1; i < len; i++) {
  //   preSum[i] = preSum[i - 1] + nums[i]
  // }
  // let ans = 0
  // for (let i = 0; i < len; i++) {
  //   // 前面i个元素的和大于等于后面所有元素的和，就不符合要求了，退出循环
  //   if (preSum[len - 1] - preSum[i] <= preSum[i]) {
  //     break
  //   }
  //   for (let j = i + 1; j < len - 1; j++) {
  //     if (preSum[i] <= preSum[j] - preSum[i] && preSum[j] - preSum[i] <= preSum[len - 1] - preSum[j]) {
  //       ans++
  //     }
  //   }
  // }
  // return ans
  // *************************************************************
  // 方法2：前缀和+回溯，超时！！！！看来只能用前缀和+二分法了
  const len = nums.length
  if (len === 0) {
    return 0
  }
  let preSum = [0]
  let ans = 0
  for (let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  // path存储用来分割的两个元素的索引，回溯法会遍历出所有的两个不同元素的索引
  const backtrack = (start, path) => {
    console.log(path)
    if (path.length === 2) {
      let sum1 = preSum[path[0] + 1]
      let sum2 = preSum[path[1] + 1] - preSum[path[0] + 1]
      let sum3 = preSum[len] - preSum[path[1] + 1]
      if (sum1 <= sum2 && sum2 <= sum3) {
        ans++
      }
      return
    }
    for (let i = start; i < len - 1; i++) {
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return ans
}
waysToSplit([1, 2, 2, 2, 5, 0])
// @lc code=end
