/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 方法1：自己写的
  // let hash1 = {
  //   I: 1,
  //   V: 5,
  //   X: 10,
  //   L: 50,
  //   C: 100,
  //   D: 500,
  //   M: 1000,
  // }
  // let hash2 = {
  //   IV: 4,
  //   IX: 9,
  //   XL: 40,
  //   XC: 90,
  //   CD: 400,
  //   CM: 900,
  // }
  // let result = 0
  // for (let i = 0; i < s.length; i++) {
  //   let twoLetterNumber = hash2[s.slice(i, i + 2)]
  //   if (twoLetterNumber) {
  //     result += twoLetterNumber
  //     i += 1
  //     continue
  //   }
  //   let oneLetterNumber = hash1[s[i]]
  //   if (oneLetterNumber) {
  //     result += oneLetterNumber
  //   }
  // }
  // return result
  // *********************************************
  // 方法2：参考官方题解
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let ans = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    const value = hash[s[i]]
    // I比V小，所以是-1
    // X−I+V=10−1+5=14
    if (i < n - 1 && value < hash[s[i + 1]]) {
      ans -= value
    } else {
      ans += value
    }
  }
  return ans
}
romanToInt('LVIII')
// @lc code=end
