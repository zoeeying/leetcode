/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 方法1：枚举，超时，枚举思路也挺好
  // let count = 0
  // for (let start = 0; start < nums.length; start++) {
  //   let sum = 0
  //   for (let end = start; end >= 0; end--) {
  //     sum += nums[end]
  //     if (sum === k) {
  //       count++
  //     }
  //   }
  // }
  // return count
  // ***************************************************
  // 方法2：使用前缀和，然后双层遍历找子数组，超时
  // const len = nums.length
  // // 使用前缀和
  // // preSum第一个元素是0，长度是len+1
  // // preSum[i]就是nums[0]到nums[i-1]的和
  // // preSum[j+1]-preSum[i]就是nums[i]到nums[j]的和
  // const preSum = [0]
  // for (let i = 0; i < len; i++) {
  //   preSum[i + 1] = preSum[i] + nums[i]
  // }
  // let ans = 0
  // // 下面的双层遍历，通过nums.slice(i, j)，可以找到nums中的所有子数组
  // // 子数组不包含下标为j的元素
  // for (let j = 1; j <= len; j++) {
  //   for (let i = 0; i < j; i++) {
  //     if (preSum[j] - preSum[i] === k) {
  //       ans++
  //     }
  //   }
  // }
  // return ans
  // ****************************************************
  // 方法3：前缀和+哈希表，哈希表的思想参考“两数之和”
  const hash = { 0: 1 } // key是累加和，值为累加和出现的次数
  let sum = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (hash[sum - k]) {
      count += hash[sum - k]
    }
    hash[sum] = (hash[sum] || 0) + 1
  }
  return count
}
subarraySum([1, 2, 3], 2)
// @lc code=end
