/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 方法一：简单粗暴
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!nums.includes(i)) {
  //     return i
  //   }
  // }
  // ------------------------------------------------
  // 方法二：对数组进行升序排序，遍历排序后的数组
  // 如果当前索引跟nums[i]不相等，那么i就是缺失的数字
  // nums.sort((a, b) => a - b)
  // for (let i = 0; i < nums.length; i++) {
  //   if (i != nums[i]) {
  //     return i
  //   }
  // }
  // return nums.length
  // ------------------------------------------------
  // 方法三：使用按位异或
  let res = nums.length
  for (let i = 0, len = nums.length; i < len; i++) {
    // res ^= nums[i]
    // res ^= i
    // 上面两步可以简化成下面一步
    res ^= i ^ nums[i]
  }
  return res
}
// @lc code=end
