/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0;i < numbers.length;i++) {
    if (numbers.includes(target - numbers[i])) {
      return ([i + 1, numbers.lastIndexOf(target - numbers[i]) + 1])
    }
  }
}
// @lc code=end

