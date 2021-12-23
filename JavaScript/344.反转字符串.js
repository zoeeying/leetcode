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
var reverseString = function (s) {
  // 方法一
  // const swapArray = (arr, index1, index2) => {
  //   arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  //   return arr
  // }
  // for (let i = 0; i < s.length / 2; i++) {
  //   swapArray(s, i, s.length - 1 - i)
  // }
  // -------------------------------------------
  // 方法二：双指针
  let l = 0,
    r = s.length - 1
  while (l < r) {
    ;[s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
}

// @lc code=end
