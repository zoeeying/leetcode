/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // 看题解，这题可以转换为把heights按照从小到大进行排序
  // 然后把排序后的数组跟原数组进行比较，得出相同位置元素值不同的个数
  const sorted = [...heights].sort((a, b) => a - b)
  const len = heights.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    if (sorted[i] !== heights[i]) {
      ans++
    }
  }
  return ans
}

// @lc code=end
