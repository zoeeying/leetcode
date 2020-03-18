/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // s.reverse()
  const swapArray = (arr, index1, index2) => {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0]
    return arr
  }
  for (let i = 0; i < s.length / 2; i++) {
    swapArray(s, i, s.length - 1 - i)
  }
}

// @lc code=end
