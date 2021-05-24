/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  // 方法1：检查num各个位数上的数字是否是单调递增的
  // const isValid = num => {
  //   let last = num % 10
  //   let valid = true
  //   while (Math.floor(num / 10)) {
  //     if (last >= num % 10) {
  //       last = num % 10
  //       num = Math.floor(num / 10)
  //     } else {
  //       valid = false
  //       break
  //     }
  //   }
  //   if (num && last < num) {
  //     valid = false
  //   }
  //   return valid
  // }
  // let ans = n
  // for (let i = n; i >= 0; i--) {
  //   if (isValid(i)) {
  //     ans = i
  //     break
  //   } else {
  //     i = i - (i % 10)
  //   }
  // }
  // return ans
  // *****************************************************
  // 方法2：别人的思路
  // 从后往前遍历，如果当前的值大于之前的值就把当前值减1然后把之前的值变成9
  if (n < 10) {
    return n
  }
  let arr = String(n).split('')
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      arr[i] -= 1
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === 9) {
          break
        }
        arr[j] = 9
      }
    }
  }
  return Number(arr.join(''))
}

console.log(monotoneIncreasingDigits(100))
// @lc code=end
